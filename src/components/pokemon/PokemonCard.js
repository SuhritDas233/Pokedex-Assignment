import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
 
const Sprite =styled.img`
width:5em
heigt:5em
`;

const Card =styled.div`
box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
&:hover{
    box-shadow:0 14px 29px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
} 
-moz-user-select:none;
-website-user-select:none;
-o-user-select:none;
`;

const StylecLink = styled(Link)`
text-decoration:none;
color:black;
&:focus,
&:hover,
&:visited,
&:link,
&:active{
    text-decoration: none;
}
`;


export default class PokemonCard extends Component {
    state={
        name:'',
        imageUrl:'',
        pokemonIndex:'',
        imageLoading:true,
        toManyRequests:false,

    };
componentDidMount(){
    const name=this.props.name;
    const url=this.props.url;

    const pokemonIndex = url.split("/")[url.split('/').length - 2];
    const imageUrl =`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
this.setState({
    name,
imageUrl,
pokemonIndex,
});

}


    render() {
      


        return (
            <div className='col-md-3 col-sn-6 mb-5'>
                <Link to={`pokemon/${this.state.pokemonIndex}`}>
                <Card className="card">
                    <h5 className="card-header">
                        {this.state.pokemonIndex}
                        <Sprite className="card-img-top rounded mx-auto mt-2"
                        onLoad={() => this.setState({imageLoading:false})}
                        onError={() => this.setState({toManyRequests:true})}
                            src={this.state.imageUrl}
                        />
                     <div className="card-body mx-auto">
                      <h6 className="card-title">{this.state.name.toLowerCase()}</h6>
                     </div>
                    </h5>
                </Card>
                </Link>
            </div>
        )
    }
}
