import React from 'react'
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Freact&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=94419559691"
                width="100%"
                height="100%"
                style={{border: "none", overflow: "hidden"}}
                scrolling="no"
                allowTransparency="true"
                frameBorder="0"
                allow="encrypted-media">

            </iframe>
        </div>
    )
}

export default Widgets
