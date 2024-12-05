import {
  DataSource,
  DropdownNavigationItem,
  DropdownSelectionItem,
} from 'ngx-obelisco-v17/core/models';
import { codeFormattingArrayList } from '../core/helpers/codeFormatting.helper';

const formattedExampleTsCode = (
  arrayName: string,
  array: any,
  interfaceName: string
) => `
import { Component  } from '@angular/core';
import { ${interfaceName} } from 'ngx-obelisco-v17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public ${arrayName}: ${interfaceName}[] = ${codeFormattingArrayList(array)}
  ];
}
`;

const formattedExampleTsCodeAlign = (arrayLeft: any, arrayRight: any) => `
import { Component  } from '@angular/core';
import { DropdownNavigationItem } from 'ngx-obelisco-v17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public dropdownItemsLeft: DropdownNavigationItem[] = ${codeFormattingArrayList(
    arrayLeft
  )}
  ];

  public dropdownItemsRight: DropdownNavigationItem[] = ${codeFormattingArrayList(
    arrayRight
  )}
  ];
}
`;

//Routes
const DROPDOWN_ROUTE = 'dropdown';
const DROPDOWN_NAVIGATION_ROUTE = 'dropdown/dropdown-navigation';
const DROPDOWN_SELECTION_ROUTE = 'dropdown/dropdown-selection';

export const DROP_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/dropdown/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/dropdown/examples',
  },
];

export const DROPDOWN_NAVIGATION = DROP_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(DROPDOWN_ROUTE, DROPDOWN_NAVIGATION_ROUTE),
  };
});

export const DROPDOWN_SELECTION = DROP_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(DROPDOWN_ROUTE, DROPDOWN_SELECTION_ROUTE),
  };
});

// DROPDOWN NAVIGATION API
export const DROPDOWN_NAVIGATION_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() title: string', customClasses: '' },
    description: { data: 'Asigna un título.', customClasses: '' },
  },
  {
    name: { data: '@Input() ariaLabel: string', customClasses: '' },
    description: { data: 'Asigna el texto al atributo aria-label.', customClasses: '' },
  },
  {
    name: { data: '@Input() iconLeft: string', customClasses: '' },
    description: { data: 'Asigna un ícono a la izquierda.', customClasses: '' },
  },
  {
    name: { data: '@Input() iconRight: string', customClasses: '' },
    description: { data: 'Asigna un ícono a la derecha.', customClasses: '' },
  },
  {
    name: { data: '@Input() isAnimatedIconLeft: boolean', customClasses: '' },
    description: {
      data: 'Habilita animación para el ícono izquierdo.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() isAnimatedIconRight: boolean', customClasses: '' },
    description: {
      data: 'Habilita animación para el ícono derecho.',
      customClasses: '',
    },
  },
  {
    name: {
      data: '@Input() dropNavItems: DropdownNavigationItem[]',
      customClasses: '',
    },
    description: {
      data: 'Asigna elementos de menú desplegable.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() isPositionRight: boolean', customClasses: '' },
    description: {
      data: 'Coloca el menú desplegable a la derecha.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() size: Sizes', customClasses: '' },
    description: { data: 'Se utiliza para establecer el tamaño del desplegable. Por defecto es grande.', customClasses: '' },
  },
  {
    name: { data: '@Input() isBordered: boolean', customClasses: '' },
    description: { data: 'Habilita el borde.', customClasses: '' },
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: '',
    },
  },
];

export const DROPDOWN_NAVIGATION_INTERFACE = `
interface DropdownNavigationItem {
  text?: string;
  textRight?: boolean;
  iconLeft?: string;
  iconRight?: string;
  isAnimatedIconLeft?: boolean;
  isAnimatedIconRight?: boolean;
  textDanger?: boolean;
  route?: string;
  link?: string;
  isDisabled?: boolean;
  children?: DropdownNavigationItem[];
  customClasses?: string;
}
`;
export const DROPDOWN_NAVIGATION_DATA_SOURCE_INTERFACE: DataSource[] = [
  {
    name: { data: 'text: string', customClasses: '' },
    description: { data: 'Texto descriptivo o título.', customClasses: '' },
  },
  {
    name: { data: 'textRight: boolean', customClasses: '' },
    description: {
      data: 'Controla la alineación del texto a la derecha.',
      customClasses: '',
    },
  },
  {
    name: { data: 'iconLeft: string', customClasses: '' },
    description: {
      data: 'Ícono que aparece en la parte izquierda.',
      customClasses: '',
    },
  },
  {
    name: { data: 'iconRight: string', customClasses: '' },
    description: {
      data: 'Ícono que aparece en la parte derecha.',
      customClasses: '',
    },
  },
  {
    name: { data: 'isAnimatedIconLeft: string', customClasses: '' },
    description: {
      data: 'Habilita animación para el ícono izquierdo.',
      customClasses: '',
    },
  },
  {
    name: { data: 'isAnimatedIconRight: string', customClasses: '' },
    description: {
      data: 'Habilita animación para el ícono derecho.',
      customClasses: '',
    },
  },
  {
    name: { data: 'textDanger: boolean', customClasses: '' },
    description: {
      data: 'Indica si el texto tiene un significado de alerta o peligro.',
      customClasses: '',
    },
  },
  {
    name: { data: 'route: string', customClasses: '' },
    description: {
      data: 'Ruta de navegación asociada al elemento.',
      customClasses: '',
    },
  },
  {
    name: { data: 'link: string', customClasses: '' },
    description: {
      data: 'Enlace o URL relacionado con el elemento.',
      customClasses: '',
    },
  },
  {
    name: { data: 'isDisabled: boolean', customClasses: '' },
    description: {
      data: 'Habilita o deshabilita la interacción con el elemento.',
      customClasses: '',
    },
  },
  {
    name: { data: 'children: DropdownNavigationItem[]', customClasses: '' },
    description: {
      data: 'Elementos secundarios que se despliegan en un menú.',
      customClasses: '',
    },
  },
  {
    name: { data: 'customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: '',
    },
  },
];

// DROPDOWN SELECTION API
export const DROPDOWN_SELECTION_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() dataTarget: string', customClasses: '' },
    description: {
      data: 'Destino de los datos para la selección.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() title: string', customClasses: '' },
    description: {
      data: 'Título descriptivo para la selección.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() isSelectionMultiple: boolean', customClasses: '' },
    description: {
      data: 'Permite múltiples selecciones si es verdadero.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() iconLeft: string', customClasses: '' },
    description: {
      data: 'Ícono que aparece a la izquierda.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() iconRight: string', customClasses: '' },
    description: { data: 'Ícono que aparece a la derecha.', customClasses: '' },
  },
  {
    name: { data: '@Input() isAnimatedIconLeft: boolean', customClasses: '' },
    description: {
      data: 'Habilita animación para el ícono izquierdo si es verdadero.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() isAnimatedIconRight: boolean', customClasses: '' },
    description: {
      data: 'Habilita animación para el ícono derecho si es verdadero.',
      customClasses: '',
    },
  },
  {
    name: {
      data: '@Input() dropSelectItems: DropdownSelectionItem[]',
      customClasses: '',
    },
    description: {
      data: 'Elementos de selección disponibles.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() isBordered: boolean', customClasses: '' },
    description: {
      data: 'Habilita un borde si es verdadero.',
      customClasses: '',
    },
  },
];
export const DROPDOWN_SELECTION_DATA_SOURCE_OUTPUT: DataSource[] = [
  {
    name: {
      data: '@Output() selectedItemChange: EventEmitter<DropdownSelectionItem | DropdownSelectionItem[]>',
      customClasses: '',
    },
    description: {
      data: 'Se utiliza para emitir el elemento o elementos seleccionados en el componente desplegable. Puede emitir un objeto de tipo DropdownSelectionItem o un arreglo de objetos DropdownSelectionItem, dependiendo de si se seleccionan radios o checkboxes en el componente.',
      customClasses: '',
    },
  },
];

export const DROPDOWN_SELECTION_INTERFACE = `
interface DropdownSelectionItem {
  id?: string;
  title?: string;
  name?: string;
  value?: string;
  isDisabled?: boolean;
  customClasses?: string;
}
`;
export const DROPDOWN_SELECTION_DATA_SOURCE_INTERFACE: DataSource[] = [
  {
    name: { data: 'id: string', customClasses: '' },
    description: {
      data: 'Identificador único del elemento.',
      customClasses: '',
    },
  },
  {
    name: { data: 'title: string', customClasses: '' },
    description: { data: 'Texto descriptivo o título.', customClasses: '' },
  },
  {
    name: { data: 'name: string', customClasses: '' },
    description: { data: 'Nombre asociado al elemento.', customClasses: '' },
  },
  {
    name: { data: 'value: string', customClasses: '' },
    description: { data: 'Valor o contenido del elemento.', customClasses: '' },
  },
  {
    name: { data: 'isDisabled: boolean', customClasses: '' },
    description: {
      data: 'Habilita o deshabilita la interacción con el elemento.',
      customClasses: '',
    },
  },
  {
    name: { data: 'customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: '',
    },
  },
];

//DROPDOWN NAVIGATION LIST
export const DROPDOWN_ITEMS_ICONS: DropdownNavigationItem[] = [
  {
    iconLeft: 'bx bx-plus',
    text: 'Opción de navegación',
    iconRight: 'arrow_forward',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
  {
    iconLeft: 'bx bx-plus',
    text: 'Opción de navegación',
    iconRight: 'arrow_forward',
    link: 'https://gcba.github.io/Obelisco-V2',
    textPosition: 'right',
  },
  {
    iconLeft: 'bx bx-plus',
    text: 'Opción de navegación',
    iconRight: 'arrow_forward',
    link: 'https://gcba.github.io/Obelisco-V2',
    isDisabled: true,
  },
  {
    isItemDanger: true,
    iconLeft: 'logout',
    text: 'Cerrar sesión',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
];
export const DROPDOWN_ITEMS_ICONS_3_OPTION: DropdownNavigationItem[] = [
  {
    iconLeft: 'bx bx-plus',
    text: 'Opción de navegación',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
  {
    text: 'Opción de navegación',
    iconRight: 'arrow_forward',
    link: 'https://gcba.github.io/Obelisco-V2',
    textPosition: 'right',
  },
  {
    isItemDanger: true,
    textPosition: 'right',
    iconRight: 'logout',
    text: 'Cerrar sesión',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
];

export const DROPDOWN_ITEMS_LEFT: DropdownNavigationItem[] = [
  {
    text: 'Opción de navegación',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
  {
    text: 'Opción de navegación',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
  {
    text: 'Opción de navegación',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
  {
    isItemDanger: true,
    iconLeft: 'logout',
    text: 'Cerrar sesión',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
];

export const DROPDOWN_ITEMS_RIGHT: DropdownNavigationItem[] = [
  {
    text: 'Opción de navegación',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
  {
    text: 'Opción de navegación',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
  {
    text: 'Opción de navegación',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
  {
    isItemDanger: true,
    text: 'Cerrar sesión',
    link: 'https://gcba.github.io/Obelisco-V2',
    iconRight: 'logout',
  },
];

export const DROPDOWN_ITEMS_WITH_SUBITEMS: DropdownNavigationItem[] = [
  {
    text: 'Opción en cascada',
    iconRight: 'expand_more',
    isAnimatedIconRight: true,
    children: [
      {
        text: 'Opción de navegación',
        route: 'components',
      },
      {
        text: 'Opción de navegación',
        link: 'https://gcba.github.io/Obelisco-V2',
      },
      {
        text: 'Opción de navegación',
        link: 'https://gcba.github.io/Obelisco-V2',
      },
    ],
  },
  {
    text: 'Opción de navegación',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
  {
    text: 'Opción de navegación',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
  {
    text: 'Opción de navegación',
    link: 'https://gcba.github.io/Obelisco-V2',
  },
  {
    isItemDanger: true,
    text: 'Cerrar sesión',
    link: 'https://gcba.github.io/Obelisco-V2',
    iconLeft: 'logout',
  },
];

// DROPDOWN NAVIGATITS
export const DROPDOWN_NAVIGATION_EXAMPLE_ICONS_HTML = `
<o-dropdown-navigation
  [dropNavItems]="dropdownItemsIcons"
  title="Desplegable"
></o-dropdown-navigation>

<o-dropdown-navigation
  [dropNavItems]="dropdownItemsIcons"
  title="Desplegable"
  iconLeft="bx bx-plus"
></o-dropdown-navigation>

<o-dropdown-navigation
  [dropNavItems]="dropdownItemsIcons2"
  iconLeft="menu"
  iconRight="none"
  ariaLabel="Menú"
></o-dropdown-navigation>
`;

export const DROPDOWN_NAVIGATION_EXAMPLE_ALIGN_HTML = `
<o-dropdown-navigation
  [dropNavItems]="dropdownItemsLeft"
  title="Desplegable Izq."
></o-dropdown-navigation>

<o-dropdown-navigation
  [dropNavItems]="dropdownItemsRight"
  title="Desplegable Der."
  [isPositionRight]="true"
></o-dropdown-navigation>
`;

export const DROPDOWN_NAVIGATION_EXAMPLE_CASCADE_HTML = `
<o-dropdown-navigation
  [dropNavItems]="dropdownItemsWithSubitems"
  title="Desplegable"
></o-dropdown-navigation>
`;

// DROPDOWN NAVIGATION TS
export const DROPDOWN_NAVIGATION_EXAMPLE_ICONS_TS = `
import { Component  } from '@angular/core';
import { DropdownNavigationItem } from 'ngx-obelisco-v17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public dropdownItemsIcons: DropdownNavigationItem[] = [
      {
        "iconLeft": "bx bx-plus",
        text: "Opción de navegación",
        "iconRight": "arrow_forward",
        link: "https://gcba.github.io/Obelisco-V2"
      },
      {
        "iconLeft": "bx bx-plus",
        text: "Opción de navegación",
        "iconRight": "arrow_forward",
        link: "https://gcba.github.io/Obelisco-V2",
        "textPosition": "right"
      },
      {
        "iconLeft": "bx bx-plus",
        text: "Opción de navegación",
        "iconRight": "arrow_forward",
        link: "https://gcba.github.io/Obelisco-V2",
        "isDisabled": true
      },
      {
        "isItemDanger": true,
        "iconLeft": "logout",
        text: "Cerrar sesión",
        link: "https://gcba.github.io/Obelisco-V2"
      }
  ];

  public dropdownItemsIcons2: DropdownNavigationItem[] = [
      {
        "iconLeft": "bx bx-plus",
        text: "Opción de navegación",
        link: "https://gcba.github.io/Obelisco-V2"
      },
      {
        text: "Opción de navegación",
        "iconRight": "arrow_forward",
        link: "https://gcba.github.io/Obelisco-V2",
        "textPosition": "right"
      },
      {
        "isItemDanger": true,
        "textPosition": "right",
        "iconRight": "logout",
        text: "Cerrar sesión",
        link: "https://gcba.github.io/Obelisco-V2"
      }
  ];
}
`;

export const DROPDOWN_NAVIGATION_EXAMPLE_ALIGN_TS = formattedExampleTsCodeAlign(
  DROPDOWN_ITEMS_LEFT,
  DROPDOWN_ITEMS_RIGHT
);

export const DROPDOWN_NAVIGATION_EXAMPLE_CASCADE_TS = `
import { Component  } from '@angular/core';
import { DropdownNavigationItem } from 'ngx-obelisco-v17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public dropdownItemsWithSubitems: DropdownNavigationItem[] = [
    {
      text: 'Opción en cascada',
      iconRight: 'expand_more',
      isAnimatedIconRight: true,
      children: [
        {
          text: 'Opción de navegación',
          route: 'components'
        },
        {
          text: 'Opción de navegación',
          link: 'https://www.google.com/'
        },
        {
          text: 'Opción de navegación',
          link: 'https://www.google.com/'
        }
      ]
    },
    {
      text: 'Opción de navegación',
      link: 'https://www.google.com/'
    },
    {
      text: 'Opción de navegación',
      link: 'https://www.google.com/'
    },
    {
      text: 'Opción de navegación',
      link: 'https://www.google.com/'
    },
    {
      textDanger: true,
      text: 'Cerrar sesión',
      link: 'https://www.google.com/',
      iconLeft: 'logout'
    }
  ];
}
`;

// DROPDOWN SELECTION LIST
export const DROPDOWN_ITEMS_RADIO: DropdownSelectionItem[] = [
  {
    id: 'radioOne',
    text: 'Radio 1',
    name: 'radio',
    value: 'radioOne',
  },
  {
    id: 'radioTwo',
    text: 'Radio 2',
    name: 'radio',
    value: 'radioTwo',
  },
  {
    id: 'radioThree',
    text: 'Radio 3',
    name: 'radio',
    value: 'radioThree',
    isDisabled: true,
  },
];

export const DROPDOWN_ITEMS_CHECKBOX: DropdownSelectionItem[] = [
  {
    id: 'checkboxOne',
    text: 'Checkbox 1',
    name: 'checkbox',
    value: 'checkboxOne',
  },
  {
    id: 'checkboxTwo',
    text: 'Checkbox 2',
    name: 'checkbox',
    value: 'checkboxTwo',
  },
  {
    id: 'checkboxThree',
    text: 'Checkbox 3',
    name: 'checkbox',
    value: 'checkboxThree',
    isDisabled: true,
  },
];

// DROPDOWN SELECTION HTML
export const DROPDOWN_SELECTION_EXAMPLE_RADIO_HTML = `
<o-dropdown-selection
  dataTarget="dropdownRadio"
  title="Desplegable"
  iconLeft="person"
  iconRight="expand_more"
  [dropSelectItems]="dropdownItemsRadio"
  [isAnimatedIconRight]="true"
></o-dropdown-selection>
`;

export const DROPDOWN_SELECTION_EXAMPLE_CHECKBOX_HTML = `
<o-dropdown-selection
  dataTarget="dropdownChecbox"
  title="Desplegable"
  iconLeft="person"
  iconRight="expand_more"
  [dropSelectItems]="dropdownItemsCheckbox"
  [isAnimatedIconRight]="true"
  [isSelectionMultiple]="true"
></o-dropdown-selection>
`;

export const DROPDOWN_SELECTION_EXAMPLE_SIZES_HTML = `
<o-dropdown-selection
  dataTarget="dropdownRadioSm"
  title="Desplegable"
  iconRight="expand_more"
  [dropSelectItems]="dropdownItemsRadio"
  [isAnimatedIconRight]="true"
  size="sm"
></o-dropdown-selection>

<o-dropdown-selection
  dataTarget="dropdownRadioMd"
  title="Desplegable"
  iconRight="expand_more"
  [dropSelectItems]="dropdownItemsRadio"
  [isAnimatedIconRight]="true"
></o-dropdown-selection>

<o-dropdown-selection
  dataTarget="dropdownRadioLg"
  title="Desplegable"
  iconRight="expand_more"
  [dropSelectItems]="dropdownItemsRadio"
  [isAnimatedIconRight]="true"
  size="lg"
></o-dropdown-selection>
`;

// DROPDOWN SELECTION TS
export const DROPDOWN_SELECTION_EXAMPLE_RADIO_TS = formattedExampleTsCode(
  'dropdownItemsRadio',
  DROPDOWN_ITEMS_RADIO,
  'DropdownSelectionItem'
);

export const DROPDOWN_SELECTION_EXAMPLE_CHECKBOX_TS = formattedExampleTsCode(
  'dropdownItemsCheckbox',
  DROPDOWN_ITEMS_CHECKBOX,
  'DropdownSelectionItem'
);
