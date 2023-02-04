import {Image, Dimensions} from "react-native";
import PixelRatio from "react-native/Libraries/Utilities/PixelRatio";
function FitImage({src}) {

    const width = Dimensions.get('window').width
    const ratio = 1080 / width
    const height = 607 / ratio
    return (  
        <Image 
        style = {{
            width,
            height
        }}
        source={{
            uri: src
        }}>

        </Image>
    );  
}

export default FitImage;