import React,{useEffect, useState} from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import {Card} from 'react-native-elements';

const Pais = ({resultado}) =>{
    const [id,setId] = useState([]);
    const [info,setInfo] = useState([]);
    const [nombre,setNombre] = useState([]);
    const [capital,setCapital] = useState([]);
    const [region,setRegion] = useState([]);
    const [lengua,setLengua] = useState([]);
    const [area,setArea] = useState([]);
    const [areaUnidades,setAreaUnidades] = useState([]);
    const [img,setImg] = useState("../imagenes/0.png");

    useEffect(()=>{
        setInfo(resultado);
        lengua.length = 0;
        Object.values(info).map(data => {
            setId((data.id['ISO-3166-1-ALPHA-2']).toLowerCase());
            setNombre(data.nome.abreviado);
            setCapital(data.governo.capital.nome);
            setRegion(data.localizacao.regiao.nome);
            setArea(data.area.total);
            setAreaUnidades(data.area.unidade.símbolo);
            setImg('https://flagpedia.net/data/flags/normal/'+id+'.png');
            Object.values(data.linguas).map(l=>{
                lengua.push(l.nome);
            })
        });
    });

    return(
       <Card>
           <Card.Title>{nombre}</Card.Title>
           <Card.Divider />
           <View style={{justifyContent:'center'}}>
               <Text>Capital:{capital}</Text>
               <Text>Region:{region}</Text>
               <Text>Lengua:{lengua.toString()}</Text>
               <Text>Area Total: {area+" "+areaUnidades}</Text>
               <Image source={{uri:img}} style={{width: 300, height: 150}}/>
           </View>
       </Card> 
    );
};

export default Pais;