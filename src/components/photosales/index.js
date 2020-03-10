import React, {Component} from 'react'
import Card from '../card/card'
import Divider from '../layout/divider'
import SectionHeader from '../SectionHeader/index'

class Photosales extends Component {
    state = {
        photos: [
            {
                id: 0,
                title: "Local Boxing match",
                type: "print",
                size: "8 x 6",
                image: "https://resources.stuff.co.nz/content/dam/images/1/s/o/2/h/v/image.related.StuffLandscapeSixteenByNine.1420x800.1so21d.png/1542247347074.jpg"
            },
            {
                id: 1,
                title: "Farm Owners",
                type: "digital",
                lisence: "Personal Use",
                image: "https://fwi-wp-assets-live.s3-eu-west-1.amazonaws.com/sites/1/2018/04/9410020a-uk-farm-scene.jpg"
            }

        ]
    }



    render() {


        return (
            <div id="payment" style={{marginTop: "85px"}}>
                <SectionHeader title="Purchase sales" />

                {this.state.photos.map((photo) => {
                    photo.styles = {
                        margin: "15px 0"
                    }

                    return <React.Fragment key={photo.id}><Card key={photo.id} {...photo} /><Divider /></React.Fragment>
                })}
            </div>
        )

    }
}


export default Photosales;