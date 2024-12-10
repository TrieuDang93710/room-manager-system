type FlexDirection = 'row' | 'row-reverse' | 'col' | 'column-reverse';
type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

interface FlexProps {
  direction?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
}

const flex = ({ direction = 'row', justifyContent = 'start', alignItems = 'stretch' }: FlexProps): string => {
  return `flex flex-${direction} justify-${justifyContent} items-${alignItems}`;
};

export default flex;
