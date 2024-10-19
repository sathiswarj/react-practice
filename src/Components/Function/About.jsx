import React from 'react'

const About = () => {
  return (
    <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus interdum orci, eget tempus lectus luctus non. Aliquam in hendrerit est. Nunc mi urna, cursus vulputate ex non, fermentum hendrerit mauris. Cras condimentum, dui vitae consequat sagittis, erat ipsum bibendum mi, id sollicitudin metus sem sed enim. Aliquam ultricies, ante a feugiat aliquet, dolor nisl pharetra augue, et efficitur est elit id nisl. In ac efficitur mauris, in congue tortor. Maecenas elementum dolor odio, in sollicitudin neque dictum volutpat. Maecenas rutrum, ante a egestas facilisis, orci risus condimentum dolor, quis suscipit ante magna quis ligula. Sed molestie augue risus, eget pretium libero porttitor a. Donec interdum ac mi vel rutrum. Suspendisse potenti. Nunc vel lobortis dui, et faucibus ex. Aliquam eleifend sapien porta, ultricies mauris at, aliquet dui.
Phasellus quis neque ut elit lobortis accumsan a nec purus. Nunc velit nisi, finibus et porttitor vitae, suscipit sit amet neque. Nulla laoreet purus faucibus, elementum dui quis, hendrerit tortor. Etiam enim arcu, semper a luctus nec, congue at lectus. Vivamus eleifend fringilla ligula non bibendum. Proin sit amet interdum velit, ut pulvinar magna. Phasellus vulputate justo eu laoreet sodales. Cras eleifend sit amet ipsum vel vehicula. Nullam pharetra elementum diam sed fringilla. Etiam varius consequat fermentum. Nam quis rhoncus nibh. In a sollicitudin odio. Nam tortor metus, facilisis in nisl ac, feugiat mattis lectus.


Maecenas quis condimentum diam. Fusce ut dictum mi. Vivamus ultrices placerat quam, aliquam tristique odio molestie eget. Ut sit amet venenatis arcu. Ut at sagittis mauris. Phasellus faucibus rutrum erat, ac aliquam quam cursus ac. Pellentesque placerat est dolor, non hendrerit diam tempor varius. Ut consectetur purus magna, vitae congue tellus maximus vel. Phasellus elementum tellus nec nulla dignissim, et auctor est rhoncus.
        </p>
        <ul>
          <li>{[...Array.from(Array(10000).keys())].map((key) =>(
            <li>{key}</li>
          ))}</li>
        </ul>
    </div>
  )
}

export default About