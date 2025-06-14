import { View, Text, Button } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';

interface ITrailerVideo {
    videoUrl: string
}

const TrailerVideo = ({ videoUrl }: ITrailerVideo) => {

   const playerRef = useRef(null);

  



    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
      <YoutubePlayer
        ref={playerRef}
        height={230}
        play={true}
        videoId={videoUrl} // <-- Replace this with your YouTube video key
      />
    </View>
    )
}

export default TrailerVideo