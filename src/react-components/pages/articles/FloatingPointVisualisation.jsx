import React from 'react';

const title = "Floating point visualisation";
const image = "floating-point-visualisation.jpg";
const link = "floating-point-visualisation";
const blurb = "this is a test blurb";
const published = true;

class PageContents extends React.Component {
    render () {
      return <div className="container">
         <div className="section">
<div className="bs-example" data-example-id="responsive-embed-16by9-iframe-youtube">
<div className="embed-responsive embed-responsive-16by9">
   <iframe className="embed-responsive-item"src="https://www.youtube.com/embed/MqHDDtVYJRI" frameborder="0" allowfullscreen></iframe>
</div>
</div>
<p>This fascinating expose of the inner workings of the IEEE floating point standard gives foundation to some of the quirky features of the </p>
          </div>
      </div>
    }
};

const exportable = {
    published: published,
    PageContents: PageContents,
    title: title,
    image: image,
    blurb: blurb,
}

export default exportable;
