import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import SERVER from "../services/index"
import { containerTask, anuncioText } from '../styles/style'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const AnunciosList = () => {
    const [anunciosDL, setAnunciosDL] = useState([])

    const fetchAnuncios = async () => {
        const res = await global.fetch(`${SERVER}/anuncio`)
        const json = await res.json()
        setAnunciosDL(json)
        console.log(anunciosDL)
    }

    useEffect(() => {
        fetchAnuncios()
    }, [])
    const LeftContent = props => <Avatar.Icon {...props} icon="message-badge" />
    return (

        <>
            {
                anunciosDL.map((element) => (
                    <>
                        <View style={containerTask}>
                            <Card>
                                <Card.Title title="Anuncio" left={LeftContent} />
                                <Card.Content>
                                    <View style={anuncioText}>
                                        <Title>{element.descripcion}</Title>
                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    </>
                ))
            }
        </>
    )
}

export default AnunciosList