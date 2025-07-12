export type ChildrenProps = {
    children:React.ReactNode;
}

export type ToggleProps = {
isShare:boolean;
closeShare:()=>void;
openShare:()=>void;
toggleShare:()=>void;
}