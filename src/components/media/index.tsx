import { AVPlaybackSource, ResizeMode, Video } from "expo-av";
import { useEffect, useState } from "react";
import { Image, ImageResizeMode, ImageSourcePropType, ImageStyle, ImageURISource, Platform, StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { commonStyles } from "../../config/rn-styles";
import PDFReader from 'rn-pdf-reader-js';
import { RnImageProps } from "src/types";

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
                    <Image style={[commonStyles.thumbnail]} source={require('./assets/icons/pdf.png')} /> :
                    <PDFReader
                        style={[props.style ? props.style : commonStyles.thumbnail]}
                        source={{ uri: (props.source as attachmentURI)?.uri }}
                    />) :

                (props.image || props.type?.includes?.('image')) ?
                    <Image
                        style={[(props.style as StyleProp<ImageStyle>) || commonStyles.thumbnail]} // TODO: there should be a property for thumbnail
                        onError={(e) => setMediaSource(require("./assets/no-image-found.png"))}
                        source={mediaSource} {...(props.resizeMode ? { resizeMode: props.resizeMode as ImageResizeMode } : {})} {...(props.resizeMethod ? { resizeMethod: 'resize' } : {})}
                    />
                    :
                    <Video
                        style={[{ backgroundColor: 'transparent' }, (props.style as StyleProp<ViewStyle>) || commonStyles.thumbnail]}
                        source={props.source as AVPlaybackSource} {...(props.resizeMode ? { resizeMode: props.resizeMode as ResizeMode } : {})}
                        isLooping
                        shouldPlay={true}
                    />
            )
        }
    </TouchableOpacity>
}
export default RnMedia;