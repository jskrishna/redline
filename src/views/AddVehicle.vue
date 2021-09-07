<template>
     <div class="add-vehicle">
 <div class="page-header">
           <h1>{{ $route.name }}</h1>
          <div class="add-btn">
              <router-link  class="btn custom-btn" class-active="" to="/car-list">Back</router-link>
            </div>
          </div>
          <div class="add-form">
                 <b-form>
            <b-form-group
              id="input-group-1"
              label="Vin:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="text"
                placeholder="Vin"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Year:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="text"
                placeholder="Year"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Make:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                type="text"
                placeholder="Make"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Modal:"
              label-for="input-4"
            >
              <b-form-input
                id="input-4"
                type="text"
                placeholder="Modal"
                required
              ></b-form-input>
            </b-form-group>

             <b-form-group
              id="input-group-5"
              label="Vehical Type:"
              label-for="input-5"
            >
              <b-form-input
                id="input-5"
                type="text"
                placeholder="Vehical Type"
                required
              ></b-form-input>
            </b-form-group>

             <b-form-group
              id="input-group-6"
              label="Body Type:"
              label-for="input-6"
            >
              <b-form-input
                id="input-6"
                type="text"
                placeholder="Body Type"
                required
              ></b-form-input>
            </b-form-group>

             <b-form-group
              id="input-group-7"
              label="No Doors:"
              label-for="input-7"
            >
              <b-form-input
                id="input-7"
                type="number"
                placeholder="No Doors"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-8"
              label="Engine Name:"
              label-for="input-8"
            >
              <b-form-input
                id="input-8"
                type="number"
                placeholder="Engine Name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-9"
              label="Engine Id:"
              label-for="input-9"
            >
              <b-form-input
                id="input-9"
                type="number"
                placeholder="Engine Id"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-10"
              label="Country of Manu:"
              label-for="input-10"
            >
              <b-form-input
                id="input-10"
                type="number"
                placeholder="Country of Manu"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-11"
              label="Transmition Id:"
              label-for="input-11"
            >
              <b-form-input
                id="input-11"
                type="number"
                placeholder="Transmition Id"
                required
              ></b-form-input>
            </b-form-group>

             <b-form-group
              id="input-group-12"
              label="Trim:"
              label-for="input-12"
            >
              <b-form-input
                id="input-12"
                type="number"
                placeholder="Trim"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-13"
              label="Color:"
              label-for="input-13"
            >
              <b-form-input
                id="input-13"
                type="number"
                placeholder="Color"
                required
              ></b-form-input>
            </b-form-group>

            <div class="text-center mt-35">
              <b-button type="submit" class="custom-btn">Submit</b-button>
            </div>
          </b-form>
          </div>
     </div>
</template>