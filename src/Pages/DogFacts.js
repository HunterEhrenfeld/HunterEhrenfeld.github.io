import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button } from "@mui/material";

const breedUrl = "https://api.thedogapi.com/v1/breeds";
const imagerBaseUrl = "https://api.thedogapi.com/v1/images/";

export default class DogFacts extends React.Component{

    state = {
        name: '',
        imageId: '',
        weight: '',
        height: '',
        breedGroup: '',
        imageUrl: ''
    }
    
    getResults(){
        axios.get(breedUrl)
        .then(res => {
            var item = res.data[Math.floor(Math.random() * res.data.length)];
            this.setState({
                name: item?.name,
                imageId: item?.reference_image_id,
                weight: item?.weight?.imperial,
                height: item?.height?.imperial,
                breedGroup: item?.breed_group
            });
            console.log(this.state);
            if(this.state.imageId !== undefined){
                axios.get(imagerBaseUrl+this.state.imageId)
                .then(res => {
                    this.setState({
                        imageUrl: res?.data?.url
                    })
                });
            }
        });
    }


    componentDidMount() {
        this.getResults();
    }

    render() {
        return (
            <div>
                <img src={this.state.imageUrl}></img>
                <h1>Dog name: {this.state.name}</h1>
                {this.state.breedGroup !== undefined ? <h1>Breed Group: {this.state.breedGroup} </h1> : ''}
                {this.state.weight !== undefined ? <h1>{this.state.weight} lbs</h1> : ''}
                {this.state.height !== undefined ? <h1>{this.state.height} inches tall</h1> : ''}
                <Button variant="contained" onClick={() => this.getResults()}>Another dog</Button>
            </div>
        )
    }

}