import express from "express";
import { urlModel } from "../model/snapUrl";

export const createUrl = async (
  req: express.Request,
  res: express.Response
) => {
  //create url
  try {
    console.log(`This is the fullUrl from: ${req.body.fullUrl}`);
    const { fullUrl } = req.body;
    const urlFound = await urlModel.find({ fullUrl });
    if (urlFound.length > 0) {
      //url already exists
      res.status(409);
      res.send(urlFound);
    } else {
      //creating new short url
      const snapUrl = await urlModel.create({ fullUrl });
      res.send(201).send(snapUrl);
    }
  } catch (error) {
    res.status(500).send({ message: "Oops something went wrong" });
  }
};

export const getAllUrl = async (
  req: express.Request,
  res: express.Response
) => {
  //getAllurl
  try {
    const shortUrls = await urlModel.find();
    //Empty state: no urls found
    if (shortUrls.length < 0) {
      res.status(404).send({ message: "No snapUrls found" });
    } else {
      res.status(200).send(shortUrls);
    }
  } catch (error) {
    res.status(500).send({ message: "Oops something went wrong" });
  }
};

export const getUrl = async (req: express.Request, res: express.Response) => {
  //geturl
};
export const deleteUrl = async (
  req: express.Request,
  res: express.Response
) => {
  //deleteurl
};
