import { MQTTResponse } from "./MQTTResponse";

export interface Dentist extends MQTTResponse{
    clinic: {
        name: string
        address: string
    } 
}