<template>
  <div class="part-list">
    <h1>{{ $route.name }}</h1>
      <table
      id="example"
      class="display responsive nowrap"
      cellspacing="0"
      width="100%"
    >
      <thead>
        <tr>
          <th>Date Enter</th>
          <th>Part Name</th>
          <th>Year/ Make/ Model</th>
          <th>Description</th>
          <th>Part Number</th>
          <th>Vin</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr  v-for="(item, key) in items" :key="key">
          <td>{{key+1}}</td>
          <td>{{item.Stock}}</td>
                    <td>{{item.Year_Make_Model}}</td>
          <td>{{item.$Const}}</td>
          <td>{{item.Parts}}</td>
          <td>{{item.Parts_Value}}</td>
          <td>
            <ul class="action-list">
              <li>
                <a href="" class="act-icon view-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="16.256"
                    viewBox="0 0 25 16.256"
                  >
                    <g transform="translate(-1 -3)">
                      <g transform="translate(1 3)">
                        <ellipse
                          cx="3.5"
                          cy="3"
                          rx="3.5"
                          ry="3"
                          transform="translate(9.138 5)"
                        />
                        <path
                          d="M13.5,3A13.185,13.185,0,0,0,1,11.128a13.185,13.185,0,0,0,12.5,8.128A13.185,13.185,0,0,0,26,11.128,13.185,13.185,0,0,0,13.5,3Zm0,13a5.134,5.134,0,0,1-5.357-4.877A5.134,5.134,0,0,1,13.5,6.251a5.134,5.134,0,0,1,5.357,4.877A5.134,5.134,0,0,1,13.5,16Z"
                          transform="translate(-1 -3)"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="" class="act-icon edit-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.258"
                    height="16.256"
                    viewBox="0 0 16.258 16.256"
                  >
                    <g transform="translate(-2.468 -2.525)">
                      <g transform="translate(2.468 2.525)">
                        <path
                          d="M22.116,16.3,13.8,24.6a12.685,12.685,0,0,1,2.019,1.643,12.127,12.127,0,0,1,1.643,2.019l8.316-8.316a10,10,0,0,0-1.608-2.036A10.025,10.025,0,0,0,22.116,16.3Z"
                          transform="translate(-11.861 -13.943)"
                        />
                        <path
                          d="M72.454,4.54,70.863,2.948a1.456,1.456,0,0,0-2.053,0L67.8,3.958A12.686,12.686,0,0,1,69.819,5.6,11.967,11.967,0,0,1,71.462,7.62l1.01-1.01A1.493,1.493,0,0,0,72.454,4.54Z"
                          transform="translate(-56.621 -2.525)"
                        />
                        <path
                          d="M3.654,70.8,2.491,74.684a.536.536,0,0,0,.667.667l3.884-1.163a10.417,10.417,0,0,0-1.506-1.882A9.711,9.711,0,0,0,3.654,70.8Z"
                          transform="translate(-2.468 -59.118)"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="" class="act-icon add-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.256"
                    height="16.256"
                    viewBox="0 0 16.256 16.256"
                  >
                    <g transform="translate(-8.45 -8.55)">
                      <path
                        d="M22.326,10.93a8.129,8.129,0,1,0,0,11.5A8.133,8.133,0,0,0,22.326,10.93ZM20.27,17.138a.684.684,0,0,1-.47.2H17.254V19.88a.669.669,0,0,1-.666.666.66.66,0,0,1-.666-.666V17.334H13.376a.666.666,0,0,1,0-1.332h2.546V13.456a.66.66,0,0,1,.666-.666h0a.66.66,0,0,1,.666.666V16H19.8a.66.66,0,0,1,.666.666A.786.786,0,0,1,20.27,17.138Z"
                        transform="translate(0 0)"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from "jquery";

export default {
   data () {
  return{
     items: [
       {id:"1",Stock:"0155220",Year_Make_Model:"2014",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
       {id:"2",Stock:"0155220",Year_Make_Model:"2014",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
       {id:"3",Stock:"0155220",Year_Make_Model:"2014",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
       {id:"4",Stock:"0155220",Year_Make_Model:"2014",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
       {id:"5",Stock:"0155220",Year_Make_Model:"2020",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
        {id:"1",Stock:"0155220",Year_Make_Model:"2014",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
       {id:"2",Stock:"0155220",Year_Make_Model:"2014",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
       {id:"3",Stock:"0155220",Year_Make_Model:"2014",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
       {id:"4",Stock:"0155220",Year_Make_Model:"2014",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
       {id:"5",Stock:"0155220",Year_Make_Model:"2020",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
        {id:"1",Stock:"0155220",Year_Make_Model:"2014",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
       {id:"2",Stock:"0155220",Year_Make_Model:"2014",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
       {id:"3",Stock:"0155220",Year_Make_Model:"2014",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
       {id:"4",Stock:"0155220",Year_Make_Model:"2014",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
       {id:"5",Stock:"0155220",Year_Make_Model:"2020",$Const:"$2500",Parts:"320",Parts_Value:"$550"},
        ],
  }
},
  mounted() {
    $("#example").DataTable();
  },
};
</script>