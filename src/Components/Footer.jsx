import React from 'react'

export default function Footer() {
  return (
    <div>
      <div class="container">
  <footer class="row row-cols-3 row-cols-md-5 py-5 my-5 border-top">

    <div class="col mb-3">
      <h5>Home</h5>
      <ul class="nav flex-column">
        {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li> */}
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Bakery</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Drinks</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Beauty</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Makeup items</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Perfumes</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Fashion</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Earrings</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Rings</a></li>
      </ul>
    </div>
    <div class="col mb-3">
      <h5>Bags</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Boys bags</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Girls bags</a></li>
      </ul>
    </div>
    <div class="col mb-3">
      <h5>Snacks</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Chips</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Candy</a></li>
      </ul>
    </div>
  </footer>
  <h3 className='text-center'>Developed by Raish Mohammad</h3>
</div>
    </div>
  )
}
