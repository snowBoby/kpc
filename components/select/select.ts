import {Component, provide, createRef, findDomFromVNode, Children, VNodeComponentClass, VNode} from 'intact';
import template from './select.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {SELECT, RECORD_OPTIONS} from './constants';
import {bind, findChildren} from '../utils';
import {Dropdown} from '../dropdown';
import {useRecordParent} from '../../hooks/useRecordComponent';
import {isNullOrUndefined} from 'intact-shared';
import {Option} from './option';

export interface SelectProps {
    value: any
    multiple: boolean
    filterable: boolean
    loading: boolean
    disabled: boolean
    name: string
    keywords: string
    size: Sizes
    hideIcon: boolean
    clearable: boolean
}

export class Select<T extends SelectProps = SelectProps> extends Component<T> {
    static template = template;

    private dropdownRef = createRef<Dropdown>(); 
    private options: Option[] = [];

    init() {
        provide(SELECT, this);
        this.options = useRecordParent(RECORD_OPTIONS);
    }

    @bind
    private onClick(e: MouseEvent) {
        this.trigger('click', e);
    }

    private getLabel() {
        const {value, multiple, children} = this.get();

        if (isNullOrUndefined(value)) return;

        if (!multiple) {
            return getLabel(children, value);
        } else {
            const labels: Children[] = [];
            value.forEach((value: any) => {
                const label = getLabel(children, value);
                if (!isNullOrUndefined(label)) {
                    labels.push(label);
                }
            });

            return labels;
        }
    }

    private delete(index: number, e: MouseEvent) {
        if (this.get('disabled')) return;

        e.stopPropagation();

        const value = (this.get('value') as any[]).slice(0);
        value.splice(index, 1);
        this.set('value', value);
    }

    @bind
    private setWidth() {
        const menuElement = findDomFromVNode(this.dropdownRef.value!.menuVNode!, true) as HTMLElement;
        const entity = findDomFromVNode(this.$lastInput!, true) as HTMLElement; 
        menuElement.style.minWidth = `${entity.offsetWidth}px`;
    }

    @bind
    private clear(e: MouseEvent) {
        e.stopPropagation();
        this.set('value', this.get('multiple') ? [] : '');
    }
}

function getLabel(children: Children, value: any) {
    let label: Children = null;
    findChildren(children, (vNode) => {
        if ((vNode as VNodeComponentClass).tag === Option) {
            const props = (vNode as VNodeComponentClass).props;
            if (isNullOrUndefined(props)) return false;
            if (props.value === value) {
                label = props.label;
                if (isNullOrUndefined(label)) {
                    label = props.children;
                }
                return true;
            }
        }
        return false;
    });

    return label;
}