import { Level } from "../../helpers/imc"

type Props = {
    itemData: Level
}

export const Griditens = ({itemData}: Props) => {
    return (
        <div>{itemData.title}</div>
    )
}