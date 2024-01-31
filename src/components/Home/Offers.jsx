import React from "react";
import {Box} from "@mui/material";
import {OfferCards} from "../Offers/OfferCards.jsx";
import {PopularProducts} from "../Offers/PopularProducts.jsx";

export const Offers = () => {
  return(
      <Box>
          <OfferCards/>
          <PopularProducts/>
      </Box>
  )
}