<template>
  <div class="add-vehicle">
    <div class="page-header">
      <h1>Information & Parts List</h1>
      <div class="add-btn">
        <router-link class="btn custom-btn" class-active="" to="/car-list"
          >Back</router-link
        >
      </div>
    </div>
    <div class="information-sec">
      <div class="row">
        <div class="col-md-12">
          <b-list-group>
            <b-row>
              <b-col>
                <b-list-group-item>
                  <label>Vin</label>
                  <div class="label-value">1GN3NK34434</div>
                </b-list-group-item>
              </b-col>
              <b-col>
                <b-list-group-item>
                  <label>Sequence</label>
                  <div class="label-value">20</div>
                </b-list-group-item>
              </b-col >
                <b-col>
                <b-list-group-item>
                  <label>Stock #</label>
                  <div class="label-value">0515/APP- SANBAR/20</div>
                </b-list-group-item>
              </b-col>
              <b-col>
                <b-list-group-item>
                  <label>Year</label>
                  <div class="label-value">2014</div>
                </b-list-group-item>
              </b-col>
               <b-col>
                <b-list-group-item>
                  <label>Make</label>
                  <div class="label-value">BMW</div>
                </b-list-group-item>
              </b-col>
              <b-col>
                <b-list-group-item>
                  <label>Modal</label>
                  <div class="label-value">740 IL</div>
                </b-list-group-item>
              </b-col>
              <b-col>
                <b-list-group-item>
                  <label>Vehical Type</label>
                  <div class="label-value">Sedan</div>
                </b-list-group-item>
              </b-col>
              <b-col>
                <b-list-group-item>
                  <label>Body Type</label>
                  <div class="label-value">Sedan</div>
                </b-list-group-item>
              </b-col>
              <b-col>
                <b-list-group-item>
                  <label>NO. Doors</label>
                  <div class="label-value">4</div>
                </b-list-group-item>
              </b-col>
               <b-col>
                <b-list-group-item>
                  <label>Engine Name</label>
                  <div class="label-value">4515214</div>
                </b-list-group-item>
              </b-col>
              <b-col>
                <b-list-group-item>
                  <label>Engine ID</label>
                  <div class="label-value">TD436473</div>
                </b-list-group-item>
              </b-col>
              <b-col>
                <b-list-group-item>
                  <label>Country of Manufacturing</label>
                  <div class="label-value">Germany</div>
                </b-list-group-item>
              </b-col>
               <b-col>
                <b-list-group-item>
                  <label>Transmission ID</label>
                  <div class="label-value">4515214</div>
                </b-list-group-item>
              </b-col>
              <b-col>
                <b-list-group-item>
                  <label>Trim</label>
                  <div class="label-value">IL</div>
                </b-list-group-item>
              </b-col>
              <b-col>
                <b-list-group-item>
                  <label>Color</label>
                  <div class="label-value">Black</div>
                </b-list-group-item>
              </b-col>
               <b-col>
                <b-list-group-item>
                  <label>Miles</label>
                  <div class="label-value">120,000</div>
                </b-list-group-item>
              </b-col>
              <b-col>
                <b-list-group-item>
                  <label>Purchase Source</label>
                  <div class="label-value">$4520.30</div>
                </b-list-group-item>
              </b-col>
              <b-col>
                <b-list-group-item>
                  <label>Licence Plate</label>
                  <div class="label-value">VED3253</div>
                </b-list-group-item>
              </b-col>
               <b-col class=" col-md-4">
                <b-list-group-item>
                  <label>Lic. Expiration</label>
                  <div class="label-value">5/201/2022</div>
                </b-list-group-item>
              </b-col>
            </b-row>
             <b-row>
               <b-col class="">
                <b-list-group-item>
                  <label>Images</label>
                  <div class="s-cars-images">
                  <div>
                    <img src="https://www.drivespark.com/images/2020-05/bmw-8-series-gran-coupe-exterior-11.jpg" alt="">
                  </div>
                  <div>
                    <img src="https://www.drivespark.com/images/2020-05/bmw-8-series-gran-coupe-exterior-11.jpg" alt="">
                  </div>
                  <div>
                    <img src="https://www.drivespark.com/images/2020-05/bmw-8-series-gran-coupe-exterior-11.jpg" alt="">
                  </div>
                   <div>
                    <img src="https://www.drivespark.com/images/2020-05/bmw-8-series-gran-coupe-exterior-11.jpg" alt="">
                  </div>
                  </div>
                </b-list-group-item>
              </b-col>
            </b-row>
          </b-list-group>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="custom-table">
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
                <th>Recommended Sales $</th>
                <th>Part Grade</th>
                <th>Warranty</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(item, key) in items" :key="key">
                <td>{{ key + 1 }}</td>
                <td>{{ item.Stock }}</td>
                <td>{{ item.Year_Make_Model }}</td>
                <td>{{ item.$Const }}</td>
                <td>{{ item.Parts }}</td>
                <td>
                  <b-badge variant="danger">{{ item.Parts_Value }}</b-badge>
                </td>
                <td>{{ item.Recommended_Sales }}</td>
                <td>{{ item.Part_Grade }}</td>
                <td>{{ item.Warranty }}</td>
                <td>
                  <ul class="action-list">
                    <li>
                      <a href="#"
                        class="act-icon view-icon tooltips"
                        data-tooltip="Part Images"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="26"
                          viewBox="0 0 30 26"
                        >
                          <path
                            d="M7.918,8,8.51,3.859A1,1,0,0,1,9.5,3h13a1,1,0,0,1,.99.859L24.082,8H30a1,1,0,0,1,1,1V28a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V9A1,1,0,0,1,2,8ZM16,10.5A7.5,7.5,0,1,0,23.5,18,7.5,7.5,0,0,0,16,10.5ZM16,14a4,4,0,1,0,4,4A4,4,0,0,0,16,14Zm8-1h3a1,1,0,0,0,0-2H24a1,1,0,0,0,0,2Z"
                            transform="translate(-1 -3)"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <router-link
                        class="act-icon edit-icon tooltips"
                        data-tooltip="Edit"
                        :to="{ name: 'Edit Part', params: { id: item.id } }"
                      >
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
                      </router-link>
                    </li>
                    <li>
                      <a href="#"
                        class="act-icon delete-icon tooltips"
                        data-tooltip="Delete"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30.002"
                          viewBox="0 0 30 30.002"
                        >
                          <g transform="translate(0 0)">
                            <path
                              d="M28.877,28.9a3.732,3.732,0,0,1-5.291,0L1.094,6.395A3.744,3.744,0,0,1,6.385,1.1L28.877,23.6a3.748,3.748,0,0,1,0,5.3ZM28.9,6.395,6.419,28.9a3.743,3.743,0,1,1-5.291-5.295L23.612,1.1A3.743,3.743,0,1,1,28.9,6.395Z"
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
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      items: [
        {
          id: "1",
          Stock: "0155220",
          Year_Make_Model: "2014",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "2",
          Stock: "0155220",
          Year_Make_Model: "2014",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "3",
          Stock: "0155220",
          Year_Make_Model: "2014",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "4",
          Stock: "0155220",
          Year_Make_Model: "2014",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "5",
          Stock: "0155220",
          Year_Make_Model: "2020",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "1",
          Stock: "0155220",
          Year_Make_Model: "2014",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "2",
          Stock: "0155220",
          Year_Make_Model: "2014",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "3",
          Stock: "0155220",
          Year_Make_Model: "2014",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "4",
          Stock: "0155220",
          Year_Make_Model: "2014",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "5",
          Stock: "0155220",
          Year_Make_Model: "2020",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "1",
          Stock: "0155220",
          Year_Make_Model: "2014",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "2",
          Stock: "0155220",
          Year_Make_Model: "2014",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "3",
          Stock: "0155220",
          Year_Make_Model: "2014",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "4",
          Stock: "0155220",
          Year_Make_Model: "2014",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
        {
          id: "5",
          Stock: "0155220",
          Year_Make_Model: "2020",
          $Const: "$2500",
          Parts: "320",
          Parts_Value: "$550",
          Recommended_Sales: "$520",
          Part_Grade: "A",
          Warranty: "15 days",
        },
      ],
    };
  },
  mounted() {
    $("#example").DataTable();
  },
};
</script>