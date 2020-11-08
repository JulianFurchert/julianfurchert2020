import React, { useEffect } from 'react';
import { motion, useMotionValue, animate } from "framer-motion"
import { Thumbnail, ThumbnailProps, Svg, Path, Rect } from "../components"

export const Seading: React.FC<Partial<ThumbnailProps>> = props => {
  return(
    <Thumbnail 
      {...props} 
      name="Seading - Design Journey"
      href='/projects/seading'
    >
      <Svg viewBox="0 0 550 550" width="100%" css={{ backgroundColor: '$hiContrast' }}>
        <Path css={{ fill: '$loContrast' }} transform="translate(67 315)" d="M37.434-30.09l20.5-.1a3.144,3.144,0,0,0,1.02.1,5.573,5.573,0,0,0,5.508-5.61V-65.892A5.485,5.485,0,0,0,58.956-71.4H10.71A5.508,5.508,0,0,0,5.1-65.892a5.53,5.53,0,0,0,5.61,5.61H53.346V-41.31l-17.544.1a3.47,3.47,0,0,0-1.02-.1l-24.072.1A5.508,5.508,0,0,0,5.1-35.7a5.594,5.594,0,0,0,5.61,5.61l12.444-.1L6.324-9.078A5.338,5.338,0,0,0,5.1-5.61,5.53,5.53,0,0,0,10.71,0H58.956a5.508,5.508,0,0,0,5.508-5.61,5.485,5.485,0,0,0-5.508-5.508H22.236Zm94.452-21.726a31.409,31.409,0,0,0-6.222-10.4,28.428,28.428,0,0,0-21.318-9.18,28.428,28.428,0,0,0-21.318,9.18,31.41,31.41,0,0,0-6.222,10.4,39.126,39.126,0,0,0-2.142,13.158v5.916a39.126,39.126,0,0,0,2.142,13.158,31.41,31.41,0,0,0,6.222,10.4A28.428,28.428,0,0,0,104.346,0a28.428,28.428,0,0,0,21.318-9.18,31.409,31.409,0,0,0,6.222-10.4,39.126,39.126,0,0,0,2.142-13.158v-5.916A39.126,39.126,0,0,0,131.886-51.816ZM122.91-32.742c0,12.954-7.446,21.624-18.564,21.624s-18.564-8.67-18.564-21.624v-5.916c0-12.954,7.446-21.624,18.564-21.624s18.564,8.67,18.564,21.624ZM149.838-71.4a5.508,5.508,0,0,0-5.61,5.508V-5.61A5.53,5.53,0,0,0,149.838,0a5.508,5.508,0,0,0,5.508-5.61V-60.282h37.128V-5.61A5.53,5.53,0,0,0,198.084,0a5.508,5.508,0,0,0,5.508-5.61V-65.892a5.485,5.485,0,0,0-5.508-5.508Zm81.09,60.282,41-51.2a5.627,5.627,0,0,0-.816-7.854,5.627,5.627,0,0,0-7.854.816l-22.44,28.05-21.42.1a5.508,5.508,0,0,0-5.61,5.508,5.594,5.594,0,0,0,5.61,5.61l12.444-.1L215.016-9.078a5.337,5.337,0,0,0-1.224,3.468A5.53,5.53,0,0,0,219.4,0h48.246a5.508,5.508,0,0,0,5.508-5.61,5.485,5.485,0,0,0-5.508-5.508ZM288.966-71.4a5.508,5.508,0,0,0-5.61,5.508V-35.7a5.594,5.594,0,0,0,5.61,5.61,5.573,5.573,0,0,0,5.508-5.61V-60.282H331.6v27.54c0,12.954-7.446,21.624-18.564,21.624A5.485,5.485,0,0,0,307.53-5.61,5.508,5.508,0,0,0,313.038,0a28.428,28.428,0,0,0,21.318-9.18,31.41,31.41,0,0,0,6.222-10.4,39.126,39.126,0,0,0,2.142-13.158v-33.15a5.485,5.485,0,0,0-5.508-5.508ZM410.142-51.816a31.409,31.409,0,0,0-6.222-10.4A28.429,28.429,0,0,0,382.6-71.4H358.53a5.508,5.508,0,0,0-5.61,5.508,5.53,5.53,0,0,0,5.61,5.61H382.6c11.118,0,18.564,8.67,18.564,21.624v5.916c0,12.954-7.446,21.624-18.564,21.624H358.53a5.508,5.508,0,0,0-5.61,5.508A5.53,5.53,0,0,0,358.53,0H382.6A28.429,28.429,0,0,0,403.92-9.18a31.409,31.409,0,0,0,6.222-10.4,39.126,39.126,0,0,0,2.142-13.158v-5.916A39.126,39.126,0,0,0,410.142-51.816Z" />
      </Svg>
    </Thumbnail>
  )
}