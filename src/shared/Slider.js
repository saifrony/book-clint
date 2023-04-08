import React from 'react';

const Slider = () => {
    return (
        <div className='mt-5'>
            <div className="carousel w-full h-96">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/006/296/747/small/bookshelf-with-books-biography-adventure-novel-poem-fantasy-love-story-detective-art-romance-banner-for-library-book-store-genre-of-literature-illustration-in-flat-style-vector.jpg" className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73X7IIOtsPE0bApCrKfF8wLzynOX3jL9bwUte5KG_5ZJRYBFoJeIk725s1HgmTBJi-OE&usqp=CAU" className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/realistic-book-lovers-day-horizontal-background-with-composition-text-books-with-lamp-cup-vector-illustration_1284-77302.jpg" className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/hand-drawn-book-club-sale-banner_23-2149750499.jpg" className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

           

        </div>
    );
};

export default Slider;