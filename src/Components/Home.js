import React from "react";

function Home()
{
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://cdn4.iconfinder.com/data/icons/ui-admin-side-menu-set-32-vol-2/40/Cart-512.png" />

            </div>
            <h1>
                Home Component
            </h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                   <img src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" />
                </div>
                <div className="text-wrapper item">
                  <span>
                      I phone
                      Price: $1000.00
                  </span>
               
                <div className="btn-wrapper item">
                    <button> Add to cart </button>
                 </div>
                 </div>
            
            </div>
        </div>
    )
}
export default Home;