// Hard coding some tools as examples

const Tool0 = {
    id: 'tool0',
    label: 'triangle',
    tooltip: 'pyramid of Egypt',
    icon: 'triangle',
    selected: false
};

const Tool1 = {
    id: 'tool1',
    label: 'square',
    tooltip: 'Prism',
    icon: 'square',
    selected: false
};

const Tool2 = {
    id: 'tool2',
    label: 'circle',
    tooltip: 'Circle',
    icon: 'circle',
    selected: false
};

const Tool3 = {
    id: 'tool3',
    label: 'squiggle',
    tooltip: 'Spline',
    icon: 'squiggle',
    selected: false
};

const ToolCategory0 = {
    name: 'toolcategory0',
    tools: [
        Tool0,
        Tool1
    ]
};

export const ToolList = [
    Tool2,
    Tool3,
    ToolCategory0
];
