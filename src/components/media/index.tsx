import { AVPlaybackSource, ResizeMode, Video } from "expo-av";
import { useEffect, useState } from "react";
import { Image, ImageResizeMode, ImageSourcePropType, ImageStyle, ImageURISource, Platform, StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { rnStyles } from "../../config/rn-styles";
import PDFReader from 'rn-pdf-reader-js';
import { RnImageProps } from "../../types";

interface attachmentURI {
    uri: string
}

const RnMedia = (props: RnImageProps) => {

    const [mediaSource, setMediaSource] = useState<ImageSourcePropType | AVPlaybackSource>();

    useEffect(() => {
        if (props.image || props.type?.startsWith?.('image')) {
            if (typeof props.source === 'object') {
                if ((props.source as ImageURISource)?.uri)
                    setMediaSource(props.source);
                else
                    setMediaSource(require("./assets/no-image-found.png"));
            } else {
                setMediaSource(Image.resolveAssetSource(props.source));
            }
        }
    }, [props.source]);

    return <TouchableOpacity disabled={!props.onPress}
        onPress={() => props.onPress?.()}>
        {

            (props.type?.includes?.('pdf') ?
                (((props.source as attachmentURI)?.uri == undefined) ?
                    <Image style={[rnStyles.thumbnail]} source={require('./assets/icons/pdf.png')} /> :
                    <PDFReader
                        style={[props.style ? props.style : rnStyles.thumbnail]}
                        source={{ uri: (props.source as attachmentURI)?.uri }}
                    />) :

                (props.image || props.type?.includes?.('image')) ?
                    <Image
                        style={[(props.style as StyleProp<ImageStyle>) || rnStyles.thumbnail]} // TODO: there should be a property for thumbnail
                        onError={(e) => setMediaSource(require("./assets/no-image-found.png"))}
                        source={mediaSource} {...(props.resizeMode ? { resizeMode: props.resizeMode as ImageResizeMode } : {})} {...(props.resizeMethod ? { resizeMethod: 'resize' } : {})}
                    />
                    :
                    <Video
                        style={[{ backgroundColor: 'transparent' }, (props.style as StyleProp<ViewStyle>) || rnStyles.thumbnail]}
                        source={props.source as AVPlaybackSource} {...(props.resizeMode ? { resizeMode: props.resizeMode as ResizeMode } : {})}
                        isLooping
                        shouldPlay={true}
                    />
            )
        }
    </TouchableOpacity>
}
export default RnMedia;