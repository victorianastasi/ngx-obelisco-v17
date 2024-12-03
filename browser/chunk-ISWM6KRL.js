import{a as o}from"./chunk-DAYE2WGK.js";import{a,b as n}from"./chunk-LDCFWZ36.js";var s=(e,t,i)=>`
import { Component  } from '@angular/core';
import { ${i} } from 'ngx-obelisco-v17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public ${e}: ${i}[] = ${o(t)}
  ];
}
`,r=(e,t)=>`
import { Component  } from '@angular/core';
import { DropdownNavigationItem } from 'ngx-obelisco-v17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public dropdownItemsLeft: DropdownNavigationItem[] = ${o(e)}
  ];

  public dropdownItemsRight: DropdownNavigationItem[] = ${o(t)}
  ];
}
`,c="dropdown",l="dropdown/dropdown-navigation",p="dropdown/dropdown-selection",d=[{title:"Api",route:"/components/dropdown/api"},{title:"Ejemplos",route:"/components/dropdown/examples"}],O=d.map(e=>n(a({},e),{route:e.route.replace(c,l)})),x=d.map(e=>n(a({},e),{route:e.route.replace(c,p)})),D=[{name:{data:"@Input() dataTarget: string",customClasses:""},description:{data:"Asigna un destino de datos.",customClasses:""}},{name:{data:"@Input() title: string",customClasses:""},description:{data:"Asigna un t\xEDtulo.",customClasses:""}},{name:{data:"@Input() iconLeft: string",customClasses:""},description:{data:"Asigna un \xEDcono a la izquierda.",customClasses:""}},{name:{data:"@Input() iconRight: string",customClasses:""},description:{data:"Asigna un \xEDcono a la derecha.",customClasses:""}},{name:{data:"@Input() isAnimatedIconLeft: boolean",customClasses:""},description:{data:"Habilita animaci\xF3n para el \xEDcono izquierdo.",customClasses:""}},{name:{data:"@Input() isAnimatedIconRight: boolean",customClasses:""},description:{data:"Habilita animaci\xF3n para el \xEDcono derecho.",customClasses:""}},{name:{data:"@Input() children: DropdownNavigationItem[]",customClasses:""},description:{data:"Asigna elementos de men\xFA desplegable.",customClasses:""}},{name:{data:"@Input() isPositionRight: boolean",customClasses:""},description:{data:"Coloca el men\xFA desplegable a la derecha.",customClasses:""}},{name:{data:"@Input() isBordered: boolean",customClasses:""},description:{data:"Habilita el borde.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],h=`
interface DropdownNavigationItem {
  id?: string;
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
`,R=[{name:{data:"id: string",customClasses:""},description:{data:"Identificador \xFAnico para el elemento.",customClasses:""}},{name:{data:"text: string",customClasses:""},description:{data:"Texto descriptivo o t\xEDtulo.",customClasses:""}},{name:{data:"textRight: boolean",customClasses:""},description:{data:"Controla la alineaci\xF3n del texto a la derecha.",customClasses:""}},{name:{data:"iconLeft: string",customClasses:""},description:{data:"\xCDcono que aparece en la parte izquierda.",customClasses:""}},{name:{data:"iconRight: string",customClasses:""},description:{data:"\xCDcono que aparece en la parte derecha.",customClasses:""}},{name:{data:"isAnimatedIconLeft: string",customClasses:""},description:{data:"Habilita animaci\xF3n para el \xEDcono izquierdo.",customClasses:""}},{name:{data:"isAnimatedIconRight: string",customClasses:""},description:{data:"Habilita animaci\xF3n para el \xEDcono derecho.",customClasses:""}},{name:{data:"textDanger: boolean",customClasses:""},description:{data:"Indica si el texto tiene un significado de alerta o peligro.",customClasses:""}},{name:{data:"route: string",customClasses:""},description:{data:"Ruta de navegaci\xF3n asociada al elemento.",customClasses:""}},{name:{data:"link: string",customClasses:""},description:{data:"Enlace o URL relacionado con el elemento.",customClasses:""}},{name:{data:"isDisabled: boolean",customClasses:""},description:{data:"Habilita o deshabilita la interacci\xF3n con el elemento.",customClasses:""}},{name:{data:"children: DropdownNavigationItem[]",customClasses:""},description:{data:"Elementos secundarios que se despliegan en un men\xFA.",customClasses:""}},{name:{data:"customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],_=[{name:{data:"@Input() dataTarget: string",customClasses:""},description:{data:"Destino de los datos para la selecci\xF3n.",customClasses:""}},{name:{data:"@Input() title: string",customClasses:""},description:{data:"T\xEDtulo descriptivo para la selecci\xF3n.",customClasses:""}},{name:{data:"@Input() isSelectionMultiple: boolean",customClasses:""},description:{data:"Permite m\xFAltiples selecciones si es verdadero.",customClasses:""}},{name:{data:"@Input() iconLeft: string",customClasses:""},description:{data:"\xCDcono que aparece a la izquierda.",customClasses:""}},{name:{data:"@Input() iconRight: string",customClasses:""},description:{data:"\xCDcono que aparece a la derecha.",customClasses:""}},{name:{data:"@Input() isAnimatedIconLeft: boolean",customClasses:""},description:{data:"Habilita animaci\xF3n para el \xEDcono izquierdo si es verdadero.",customClasses:""}},{name:{data:"@Input() isAnimatedIconRight: boolean",customClasses:""},description:{data:"Habilita animaci\xF3n para el \xEDcono derecho si es verdadero.",customClasses:""}},{name:{data:"@Input() dropSelectItems: DropdownSelectionItem[]",customClasses:""},description:{data:"Elementos de selecci\xF3n disponibles.",customClasses:""}},{name:{data:"@Input() isBordered: boolean",customClasses:""},description:{data:"Habilita un borde si es verdadero.",customClasses:""}}],N=[{name:{data:"@Output() selectedItemChange: EventEmitter<DropdownSelectionItem | DropdownSelectionItem[]>",customClasses:""},description:{data:"Se utiliza para emitir el elemento o elementos seleccionados en el componente desplegable. Puede emitir un objeto de tipo DropdownSelectionItem o un arreglo de objetos DropdownSelectionItem, dependiendo de si se seleccionan radios o checkboxes en el componente.",customClasses:""}}],E=`
interface DropdownSelectionItem {
  id?: string;
  title?: string;
  name?: string;
  value?: string;
  isDisabled?: boolean;
  customClasses?: string;
}
`,A=[{name:{data:"id: string",customClasses:""},description:{data:"Identificador \xFAnico del elemento.",customClasses:""}},{name:{data:"title: string",customClasses:""},description:{data:"Texto descriptivo o t\xEDtulo.",customClasses:""}},{name:{data:"name: string",customClasses:""},description:{data:"Nombre asociado al elemento.",customClasses:""}},{name:{data:"value: string",customClasses:""},description:{data:"Valor o contenido del elemento.",customClasses:""}},{name:{data:"isDisabled: boolean",customClasses:""},description:{data:"Habilita o deshabilita la interacci\xF3n con el elemento.",customClasses:""}},{name:{data:"customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],m=[{iconLeft:"info",text:"Opci\xF3n de navegaci\xF3n",iconRight:"info",link:"https://www.google.com/"},{iconLeft:"info",text:"Opci\xF3n de navegaci\xF3n",iconRight:"info",link:"https://www.google.com/",textPosition:"right"},{iconLeft:"info",text:"Opci\xF3n de navegaci\xF3n",iconRight:"info",link:"https://www.google.com/",isDisabled:!0},{isItemDanger:!0,iconLeft:"logout",text:"Cerrar sesi\xF3n",link:"https://www.google.com/"}],g=[{text:"Opci\xF3n de navegaci\xF3n",link:"https://www.google.com/"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://www.google.com/"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://www.google.com/"},{isItemDanger:!0,iconLeft:"logout",text:"Cerrar sesi\xF3n",link:"https://www.google.com/"}],u=[{text:"Opci\xF3n de navegaci\xF3n",link:"https://www.google.com/"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://www.google.com/"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://www.google.com/"},{isItemDanger:!0,text:"Cerrar sesi\xF3n",link:"https://www.google.com/",iconRight:"logout"}],T=[{text:"Opci\xF3n en cascada",iconRight:"expand_more",isAnimatedIconRight:!0,children:[{text:"Opci\xF3n de navegaci\xF3n",route:"components"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://www.google.com/"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://www.google.com/"}]},{text:"Opci\xF3n de navegaci\xF3n",link:"https://www.google.com/"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://www.google.com/"},{text:"Opci\xF3n de navegaci\xF3n",link:"https://www.google.com/"},{isItemDanger:!0,text:"Cerrar sesi\xF3n",link:"https://www.google.com/",iconLeft:"logout"}],b=`
<o-dropdown-navigation
  dataTarget="dropdown1"
  [dropNavItems]="dropdownItemsIcons"
  iconRight="expand_more"
  title="Desplegable"
  [isAnimatedIconRight]="true"
></o-dropdown-navigation>

<o-dropdown-navigation
  dataTarget="dropdown2"
  [dropNavItems]="dropdownItemsIcons"
  title="Desplegable"
  iconLeft="menu"
></o-dropdown-navigation>

<o-dropdown-navigation
  dataTarget="dropdown3"
  [dropNavItems]="dropdownItemsIcons"
  iconLeft="menu"
></o-dropdown-navigation>
`,v=`
<o-dropdown-navigation
  dataTarget="dropdownLeft"
  [dropNavItems]="dropdownItemsLeft"
  title="Desplegable Izq."
  iconRight="expand_more"
  [isAnimatedIconRight]="true"
></o-dropdown-navigation>

<o-dropdown-navigation
  dataTarget="dropdownRight"
  [dropNavItems]="dropdownItemsRight"
  iconLeft="expand_more"
  title="Desplegable Der."
  [isPositionRight]="true"
  [isAnimatedIconRight]="true"
></o-dropdown-navigation>
`,S=`
<o-dropdown-navigation
  dataTarget="dropdownCascade"
  [dropNavItems]="dropdownItemsWithSubitems"
  title="Desplegable"
></o-dropdown-navigation>
`,L=s("dropdownItemsIcons",m,"DropdownNavigationItem"),P=r(g,u),f=`
import { Component  } from '@angular/core';
import { DropdownNavigationItem } from 'ngx-obelisco-v17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public dropdownItemsWithSubitems: DropdownNavigationItem[] = [
    {
      text: 'Opci\xF3n en cascada',
      iconRight: 'expand_more',
      isAnimatedIconRight: true,
      children: [
        {
          text: 'Opci\xF3n de navegaci\xF3n',
          route: 'components'
        },
        {
          text: 'Opci\xF3n de navegaci\xF3n',
          link: 'https://www.google.com/'
        },
        {
          text: 'Opci\xF3n de navegaci\xF3n',
          link: 'https://www.google.com/'
        }
      ]
    },
    {
      text: 'Opci\xF3n de navegaci\xF3n',
      link: 'https://www.google.com/'
    },
    {
      text: 'Opci\xF3n de navegaci\xF3n',
      link: 'https://www.google.com/'
    },
    {
      text: 'Opci\xF3n de navegaci\xF3n',
      link: 'https://www.google.com/'
    },
    {
      textDanger: true,
      text: 'Cerrar sesi\xF3n',
      link: 'https://www.google.com/',
      iconLeft: 'logout'
    }
  ];
}
`,I=[{id:"radioOne",text:"Radio 1",name:"radio",value:"radioOne"},{id:"radioTwo",text:"Radio 2",name:"radio",value:"radioTwo"},{id:"radioThree",text:"Radio 3",name:"radio",value:"radioThree",isDisabled:!0}],w=[{id:"checkboxOne",text:"Checkbox 1",name:"checkbox",value:"checkboxOne"},{id:"checkboxTwo",text:"Checkbox 2",name:"checkbox",value:"checkboxTwo"},{id:"checkboxThree",text:"Checkbox 3",name:"checkbox",value:"checkboxThree",isDisabled:!0}],k=`
<o-dropdown-selection
  dataTarget="dropdownRadio"
  title="Desplegable"
  iconLeft="person"
  iconRight="expand_more"
  [dropSelectItems]="dropdownItemsRadio"
  [isAnimatedIconRight]="true"
></o-dropdown-selection>
`,W=`
<o-dropdown-selection
  dataTarget="dropdownChecbox"
  title="Desplegable"
  iconLeft="person"
  iconRight="expand_more"
  [dropSelectItems]="dropdownItemsCheckbox"
  [isAnimatedIconRight]="true"
  [isSelectionMultiple]="true"
></o-dropdown-selection>
`,M=`
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
`,H=s("dropdownItemsRadio",I,"DropdownSelectionItem"),z=s("dropdownItemsCheckbox",w,"DropdownSelectionItem");export{O as a,x as b,D as c,h as d,R as e,_ as f,N as g,E as h,A as i,m as j,g as k,u as l,T as m,b as n,v as o,S as p,L as q,P as r,f as s,I as t,w as u,k as v,W as w,M as x,H as y,z};
