import React from "react";
import { useParams } from "react-router";



const FieldDetail: React.FC = () => {
    const { id } = useParams();



    return (
        <>FieldDetail {id}</>
    )
}

export default FieldDetail;