<!--物流估算-->
<template>
    <div class="estimate">
       <div class="estimate-box">
          <div class="estimate-arrive">
            <div class="estimate-arrive-box">
              <span class="estimate-arrive-box-text">预计到达</span>
            </div>
             <div class="estimate-arrive-data">
               <span class="estimate-arrive-data-num">4-1</span>
               <span class="estimate-arrive-data-unit">am</span>
             </div>
          </div>
         <div class="estimate-distance">
           <div class="estimate-distance-box">
             <span class="estimate-distance-box-text">距离</span>
           </div>
           <div class="estimate-distance-length">
             <span class="estimate-distance-length-num">2.5</span>
             <span class="estimate-distance-length-unit">km</span>
           </div>
         </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "Estimate"
    }
</script>

<style scoped>
  .estimate{
    width: 100%;
    background-color: white;
  }
   .estimate-box{
     width: 100%;
     height: 180px;
     display: flex;
   }
   .estimate-arrive{
     width: 50%;
   }
   .estimate-arrive-box{
     width: 90px;
     text-align: center;
     margin: 30px auto 0 auto;
     font-size: 14px;
     font-family: PingFangSC;
     font-weight: 500;

   }
  .estimate-arrive-data{
    width: 90px;
    text-align: center;
    margin: 8px auto;
  }
  .estimate-arrive-data-num{
    font-size: 24px;
    font-family:PingFangSC;

  }
  .estimate-arrive-data-unit{
    font-size: 10px;
  }
   .estimate-distance{
     width: 50%;
   }
   .estimate-distance-box{
     width: 90px;
     text-align: center;
     margin: 30px auto 0 auto;
     font-size: 14px;
     font-family: PingFangSC;
     font-weight: 500;

   }
   .estimate-distance-length{
     width: 90px;
     text-align: center;
     margin: 8px auto 0 auto;
   }
   .estimate-distance-length-num{
     font-size: 24px;
     font-family:PingFangSC;

   }
   .estimate-distance-length-unit{
     font-size: 10px;
   }
</style>
