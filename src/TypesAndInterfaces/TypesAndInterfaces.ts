export interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
  }


export interface LocationState {
    completedTasks:TodoItem[]
}


export interface IHome {
  status:boolean;
}


export interface SprintData {
  sprintName: string;
  goal: string;
  duration: string;
  startDate: string;
  endDate: string;
}


export interface IProps {
  onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void
  action?: 'add' | 'delete' | 'openModal' | 'closeModal'| 'Start Sprint' | 'Close' | 'Remove'
  className?:string;
  children?:any;
  type?:string
  
}

export interface Iinput {
  value?:string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick?: () => void;
  checked?:boolean;
  type:"text" | "number" | "date" | "submit"
  className:string;
  placeholder?:string;
  readonly?:boolean;
  required?:boolean;
}


export interface ISelect {
  className:string;
  value:string;
  onChange:(e: React.ChangeEvent<HTMLSelectElement>) => void
}


export interface ITextArea {
  placeholder:string;
  className:string;
  value:string;
  onChange?: (e:React.ChangeEvent<HTMLTextAreaElement>) => void;
}