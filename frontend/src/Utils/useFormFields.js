import { useState } from "react";
import { FiEdit } from "react-icons/fi";
export default function useFormFields(){
    const [fields,setFields]=useState({})
function handleFields(e){
    const {target}=e
    setFields({...fields,[target.name]:target.value})
}

return [fields,handleFields]

}
