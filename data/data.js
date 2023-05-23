import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';

export const users = [
  {
    "address": {
      "geolocation": {
        "lat": "-37.3159",
        "long": "81.1496"
      },
      "city": "kilcoole",
      "street": "new road",
      "number": 7682,
      "zipcode": "12926-3874"
    }, "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF",
    "name": {
      "firstname": "john",
      "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
  },
  {
    "address": {
      "geolocation": { "lat": "-37.3159", "long": "81.1496" }, "city": "kilcoole",
      "street": "Lovers Ln", "number": 7267, "zipcode": "12926-3874"
    }, "id": 2, "email": "morrison@gmail.com",
    "username": "mor_2314", "password": "83r5^_", "name": { "firstname": "david", "lastname": "morrison" },
    "phone": "1-570-236-7033", "__v": 0
  }, {
    "address": {
      "geolocation": { "lat": "40.3467", "long": "-30.1310" },
      "city": "Cullman", "street": "Frances Ct", "number": 86, "zipcode": "29567-1452"
    }, "id": 3, "email": "kevin@gmail.com", "username": "kevinryan", "password": "kev02937@", "name": { "firstname": "kevin", "lastname": "ryan" }, "phone": "1-567-094-1345", "__v": 0
  },
  {
    "address": {
      "geolocation": { "lat": "50.3467", "long": "-20.1310" },
      "city": "San Antonio", "street": "Hunters Creek Dr", "number": 6454, "zipcode":
        "98234-1734"
    }, "id": 4, "email": "don@gmail.com", "username": "donero", "password":
      "ewedon", "name": { "firstname": "don", "lastname": "romer" }, "phone": "1-765-789-6734", "__v": 0
  },
  {
    "address": {
      "geolocation": { "lat": "40.3467", "long": "-40.1310" }, "city": "san Antonio",
      "street": "adams St", "number": 245, "zipcode": "80796-1234"
    }, "id": 5, "email": "derek@gmail.com",
    "username": "derek", "password": "jklg*_56", "name": { "firstname": "derek", "lastname": "powell" }
    , "phone": "1-956-001-1945", "__v": 0
  },
  {
    "address": {
      "geolocation": { "lat": "20.1677", "long": "-10.6789" },
      "city": "el paso", "street": "prospect st", "number": 124, "zipcode": "12346-0456"
    },
    "id": 6, "email": "david_r@gmail.com", "username": "david_r", "password": "3478*#54",
    "name": { "firstname": "david", "lastname": "russell" }, "phone": "1-678-345-9856", "__v": 0
  },
  {
    "address": {
      "geolocation": { "lat": "10.3456", "long": "20.6419" }, "city": "fresno",
      "street": "saddle st", "number": 1342, "zipcode": "96378-0245"
    }, "id": 7,
    "email": "miriam@gmail.com", "username": "snyder", "password": "f238&@*",
    "name": { "firstname": "miriam", "lastname": "snyder" }, "phone": "1-123-943-0563", "__v": 0
  },
  {
    "address": {
      "geolocation": { "lat": "50.3456", "long": "10.6419" }, "city": "mesa",
      "street": "vally view ln", "number": 1342, "zipcode": "96378-0245"
    },
    "id": 8, "email": "william@gmail.com", "username": "hopkins", "password": "William56hj",
    "name": { "firstname": "william", "lastname": "hopkins" }, "phone": "1-478-001-0890", "__v": 0
  },
  {
    "address": {
      "geolocation": { "lat": "40.12456", "long": "20.5419" },
      "city": "miami", "street": "avondale ave", "number": 345, "zipcode": "96378-0245"
    }, "id": 9,
    "email": "kate@gmail.com", "username": "kate_h", "password": "kfejk@*_",
    "name": { "firstname": "kate", "lastname": "hale" }, "phone": "1-678-456-1934", "__v": 0
  },
  {
    "address": {
      "geolocation": { "lat": "30.24788", "long": "-20.545419" },
      "city": "fort wayne", "street": "oak lawn ave", "number": 526, "zipcode": "10256-4532"
    },
    "id": 10, "email": "jimmie@gmail.com", "username": "jimmie_k", "password": "klein*#%*",
    "name": { "firstname": "jimmie", "lastname": "klein" }, "phone": "1-104-001-4567", "__v": 0
  }]

export const usersData = [
  {
    UserID: 1001,
    UserName: 'Nirav Joshi',
    UserEmail: 'nirav@gmail.com',
    UserImage:
      'avatar.jpg' ,
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '2.4k',
    Location: 'India',
    Destance: '1209'
  },
  {
    UserID: 1002,
    UserName: 'Sunil Joshi',
    UserEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    UserImage:
      'avatar.jpg' ,
    PhoneNumber: '+201558044849',
    Gender: 'Male', 
    Jobtwo: 'Monitoring and administering medication.',
    Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '3.9k',
    Location: 'India',
    Destance: '12789'
  },
  {
    UserID: 1003,
    UserName: 'Andrew McDownland',
    UserEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    UserImage:
      'avatar3.png',
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '24.5k',
    Location: 'Cairo',
    Destance: '1569'
  },
  {
    UserID: 1004,
    UserName: 'Christopher Jamil',
    UserEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    UserImage:
      'avatar4.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#2196f3',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '5609'
  },
  {
    UserID: 1005,
    UserName: 'Michael',
    UserEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: 'red',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '9609'
  },
  {
    UserID: 1006,
    UserName: 'Nirav Joshi',
    UserEmail: 'nirav@gmail.com',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '2.4k',
    Location: 'India',
    Destance: '4999'
  },
  {
    UserID: 1007,
    UserName: 'Sunil Joshi',
    UserEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    UserImage:
      'avatar3.png',
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '3.9k',
    Location: 'India',
    Destance: '6509'
  },
  {
    UserID: 1008,
    UserName: 'Andrew McDownland',
    UserEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    UserImage:
      'avatar.jpg' ,
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '24.5k',
    Location: 'Cairo',
    Destance: '1209'
  },
  {
    UserID: 1009,
    UserName: 'Christopher Jamil',
    UserEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    UserImage:
      'avatar3.png',
    PhoneNumber: '+201067271096',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#2196f3',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '1409'
  },
  {
    UserID: 1010,
    UserName: 'Michael',
    UserEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: 'red',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '1459'
  },
  {
    UserID: 1011,
    UserName: 'Nirav Joshi',
    UserEmail: 'nirav@gmail.com',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '2.4k',
    Location: 'India',
    Destance: '9209'
  },
  {
    UserID: 1012,
    UserName: 'Sunil Joshi',
    UserEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    UserImage:
      'avatar.jpg' ,
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '3.9k',
    Location: 'India',
    Destance: '7909'
  },
  {
    UserID: 1013,
    UserName: 'Andrew McDownland',
    UserEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    UserImage:
      'avatar3.png',
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '24.5k',
    Location: 'Cairo',
    Destance: '3568'
  },
  {
    UserID: 1014,
    UserName: 'Christopher Jamil',
    UserEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    UserImage:
      'avatar3.png',
    PhoneNumber: '+201067271096',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#2196f3',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '3568'

  },
  {
    UserID: 1015,
    UserName: 'Michael',
    UserEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: 'red',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '35689'
  },
  {
    UserID: 1016,
    UserName: 'Nirav Joshi',
    UserEmail: 'nirav@gmail.com',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '2.4k',
    Location: 'India',
    Destance: '3778'

  },
  {
    UserID: 1017,
    UserName: 'Sunil Joshi',
    UserEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    UserImage:
      'avatar4.jpg',
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '3.9k',
    Location: 'India',
    Destance: '3568'
  },
  {
    UserID: 1018,
    UserName: 'Andrew McDownland',
    UserEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    UserImage:
      'avatar.jpg' ,
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '24.5k',
    Location: 'Cairo',
    Destance: '3568'

  },
  {
    UserID: 1019,
    UserName: 'Christopher Jamil',
    UserEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    UserImage:
      'avatar3.png',
    PhoneNumber: '+201067271096',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#2196f3',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '3568'

  },
  {
    UserID: 1020,
    UserName: 'Michael',
    UserEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: 'red',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '3568'

  },
  {
    UserID: 1021,
    UserName: 'Nirav Joshi',
    UserEmail: 'nirav@gmail.com',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '2.4k',
    Location: 'India',
    Destance: '3568'

  },
  {
    UserID: 1022,
    UserName: 'Sunil Joshi',
    UserEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    UserImage:
      'avatar3.png',
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '3.9k',
    Location: 'India',

  },
  {
    UserID: 1023,
    UserName: 'Andrew McDownland',
    UserEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    UserImage:
      'avatar4.jpg',
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '24.5k',
    Location: 'Cairo',
    Destance: '3568'
  },
  {
    UserID: 1024,

    UserName: 'Christopher Jamil',
    UserEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    UserImage:
      'avatar4.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#2196f3',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '3568'
  },
  {
    UserID: 1025,
    UserName: 'Michael',
    UserEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: 'red',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '3568'
  },
  {
    UserID: 1026,
    UserName: 'Nirav Joshi',
    UserEmail: 'nirav@gmail.com',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '2.4k',
    Location: 'India',
    Destance: '3568'
  },
  {
    UserID: 1027,
    UserName: 'Sunil Joshi',
    UserEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    UserImage:
      'avatar3.png',
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '3.9k',
    Location: 'India',
    Destance: '3568'

  },
  {
    UserID: 1028,
    UserName: 'Andrew McDownland',
    UserEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    UserImage:
      'avatar.jpg' ,
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '24.5k',
    Location: 'Cairo',
    Destance: '8778'
  },
  {
    UserID: 1029,
    UserName: 'Christopher Jamil',
    UserEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    UserImage:
      'avatar3.png',
    PhoneNumber: '+201067271096',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#2196f3',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '3568'
  },
  {
    UserID: 1030,
    UserName: 'Michael',
    UserEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: 'red',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo' ,
    Destance: '3568'
  },
  {
    UserID: 1031,
    UserName: 'Nirav Joshi',
    UserEmail: 'nirav@gmail.com',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '2.4k',
    Location: 'India',
    Destance: '3568'
    
  },
  {
    UserID: 1032,
    UserName: 'Sunil Joshi',
    UserEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    UserImage:
      'avatar3.png',
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '3.9k',
    Location: 'India',
    Destance: '3568'
    
  },
  {
    UserID: 1033,
    UserName: 'Andrew McDownland',
    UserEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    UserImage:
      'avatar4.jpg',
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '24.5k',
    Location: 'Cairo',
    Destance: '3568'

  },
  {
    UserID: 1034,
    UserName: 'Christopher Jamil',
    UserEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    UserImage:
      'avatar.jpg' ,
    PhoneNumber: '+201067271096',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#2196f3',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '3568'

  },
  {
    UserID: 1035,
    UserName: 'Michael',
    UserEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: 'red',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '3568'

  },
  {
    UserID: 1036,
    UserName: 'Nirav Joshi',
    UserEmail: 'nirav@gmail.com',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '2.4k',
    Location: 'India',
    Destance: '3568'

  },
  {
    UserID: 1037,
    UserName: 'Sunil Joshi',
    UserEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    UserImage:
      'avatar.jpg' ,
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '3.9k',
    Location: 'India',
    Destance: '3568'

  },
  {
    UserID: 1038,
    UserName: 'Andrew McDownland',
    UserEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    UserImage:
      'avatar3.png',
    PhoneNumber: '+201558044849',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '24.5k',
    Location: 'Cairo',
    Destance: '3568'

  },
  {
    UserID: 1039,
    UserName: 'Christopher Jamil',
    UserEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    UserImage:
      'avatar4.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Male', Jobtwo: 'Monitoring and administering medication.', Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: '#2196f3',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '3568'

  },
  {
    UserID: 1040,
    UserName: 'Michael',
    UserEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    UserImage:
      'avatar2.jpg',
    PhoneNumber: '+201067271096',
    Gender: 'Female',
    Jobtwo: 'Monitoring and administering medication.',
    Jobone: 'Providing emotional support to patients and relatives.',
    Description: 'Nurses work as part of a team of professional and medical staff that includes doctors, social workers and therapists. Much of nurses’ time is spent with patients, monitoring them, planning and delivering care, and advising them on their health. Shift work is common in nursing, as is a busy workload.',
    StatusBg: 'red',
    Weeks: '34',
    Budget: '16.5k',
    Location: 'Cairo',
    Destance: '3568'

  },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Mohamed Elkhadir',
    TotalAmount: 32.38,
    OrderItems: 'Special',
    Location: 'Cairo',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'
  },
  {
    OrderID: 345653,
    CustomerName: 'Youssef Elmahallawy',
    TotalAmount: 56.34,
    OrderItems: 'Psychiatric',
    Location: 'Alexanderia',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAg7ixL66o3ohqCSEa1lQlY_FFJZ3tfS-Uw&usqp=CAU'
  },
  {
    OrderID: 390457,
    CustomerName: 'Youssef Elsayed',
    TotalAmount: 93.31,
    OrderItems: 'Special',
    Location: 'Aswan',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'
  },
  {
    OrderID: 893486,
    CustomerName: 'Mohamed Taleet',
    TotalAmount: 93.31,
    OrderItems: 'Special',
    Location: 'Dubai',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'},
  {
    OrderID: 748975,
    CustomerName: 'Mohamed khaled',
    TotalAmount: 23.99,
    OrderItems: 'Emergancy',
    Location: 'Talkha',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Eaderly',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvnWRR38BLQTtCPhUWe-FCo26kyC5A8zI-A&usqp=CAU',
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Woman',
    Location: 'Cairo',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw6cBK8RQBDoi-q9XVB3Y8Yyhrv4fPlDF3A&usqp=CAU',
  },
  {
    OrderID: 845954,
    CustomerName: 'Eslam Mohamed',
    TotalAmount: 59.99,
    OrderItems: 'Pediatic',
    Location: 'Cairo',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZUAkiXJ6wBElY33-lkR1w-plRf361BlgGQ&usqp=CAU'
  },
  {
    OrderID: 845954,
    CustomerName: 'Habeba Ahmed',
    TotalAmount: 87.99,
    OrderItems: 'Eaderly',
    Location: 'Cairo',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvnWRR38BLQTtCPhUWe-FCo26kyC5A8zI-A&usqp=CAU',
  },
  {
    OrderID: 874534,
    CustomerName: 'Mahmoud Ahmed',
    TotalAmount: 122.99,
    OrderItems: 'Emergancy',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 38489,
    CustomerName: 'Mazen ibrahim',
    TotalAmount: 87.99,
    OrderItems: 'Woman',
    Location: 'Cairo',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw6cBK8RQBDoi-q9XVB3Y8Yyhrv4fPlDF3A&usqp=CAU',
  },
  {
    OrderID: 24546,
    CustomerName: 'Fares Elgen',
    TotalAmount: 84.99,
    OrderItems: 'Pediatic',
    Location: 'Alexanderia',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZUAkiXJ6wBElY33-lkR1w-plRf361BlgGQ&usqp=CAU'
  },
  {
    OrderID: 874534,
    CustomerName: 'Mahmoud Ahmed',
    TotalAmount: 122.99,
    OrderItems: 'Emergancy',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 10248,
    CustomerName: 'Mohamed Elkhadir',
    TotalAmount: 32.38,
    OrderItems: 'Special',
    Location: 'Cairo',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'},
  {
    OrderID: 345653,
    CustomerName: 'Youssef Elmahallawy',
    TotalAmount: 56.34,
    OrderItems: 'Psychiatric',
    Location: 'Alexanderia',
    Status: 'complete',
    StatusBg: '#8BE78B',   
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAg7ixL66o3ohqCSEa1lQlY_FFJZ3tfS-Uw&usqp=CAU'
  },
  {
    OrderID: 390457,
    CustomerName: 'Youssef Elsayed',
    TotalAmount: 93.31,
    OrderItems: 'Special',
    Location: 'Aswan',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'},
  {
    OrderID: 893486,
    CustomerName: 'Mohamed Taleet',
    TotalAmount: 93.31,
    OrderItems: 'Special',
    Location: 'Dubai',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'},
  {
    OrderID: 748975,
    CustomerName: 'Mohamed khaled',
    TotalAmount: 23.99,
    OrderItems: 'Emergancy',
    Location: 'Talkha',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Eaderly',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvnWRR38BLQTtCPhUWe-FCo26kyC5A8zI-A&usqp=CAU',
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Woman',
    Location: 'Cairo',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw6cBK8RQBDoi-q9XVB3Y8Yyhrv4fPlDF3A&usqp=CAU',
  },
  {
    OrderID: 845954,
    CustomerName: 'Eslam Mohamed',
    TotalAmount: 59.99,
    OrderItems: 'Pediatic',
    Location: 'Cairo',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZUAkiXJ6wBElY33-lkR1w-plRf361BlgGQ&usqp=CAU'
  },
  {
    OrderID: 845954,
    CustomerName: 'Habeba Ahmed',
    TotalAmount: 87.99,
    OrderItems: 'Eaderly',
    Location: 'Cairo',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvnWRR38BLQTtCPhUWe-FCo26kyC5A8zI-A&usqp=CAU',
  },
  {
    OrderID: 874534,
    CustomerName: 'Mahmoud Ahmed',
    TotalAmount: 122.99,
    OrderItems: 'Emergancy',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 38489,
    CustomerName: 'Mazen ibrahim',
    TotalAmount: 87.99,
    OrderItems: 'Woman',
    Location: 'Cairo',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw6cBK8RQBDoi-q9XVB3Y8Yyhrv4fPlDF3A&usqp=CAU',
  },
  {
    OrderID: 24546,
    CustomerName: 'Fares Elgen',
    TotalAmount: 84.99,
    OrderItems: 'Pediatic',
    Location: 'Alexanderia',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZUAkiXJ6wBElY33-lkR1w-plRf361BlgGQ&usqp=CAU'
  },
  {
    OrderID: 874534,
    CustomerName: 'Mahmoud Ahmed',
    TotalAmount: 122.99,
    OrderItems: 'Emergancy',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 10248,
    CustomerName: 'Mohamed Elkhadir',
    TotalAmount: 32.38,
    OrderItems: 'Special',
    Location: 'Cairo',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'},
  {
    OrderID: 345653,
    CustomerName: 'Youssef Elmahallawy',
    TotalAmount: 56.34,
    OrderItems: 'Psychiatric',
    Location: 'Alexanderia',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAg7ixL66o3ohqCSEa1lQlY_FFJZ3tfS-Uw&usqp=CAU'
  },
  {
    OrderID: 390457,
    CustomerName: 'Youssef Elsayed',
    TotalAmount: 93.31,
    OrderItems: 'Special',
    Location: 'Aswan',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'},
  {
    OrderID: 893486,
    CustomerName: 'Mohamed Taleet',
    TotalAmount: 93.31,
    OrderItems: 'Special',
    Location: 'Dubai',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'},
  {
    OrderID: 748975,
    CustomerName: 'Mohamed khaled',
    TotalAmount: 23.99,
    OrderItems: 'Emergancy',
    Location: 'Talkha',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Eaderly',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvnWRR38BLQTtCPhUWe-FCo26kyC5A8zI-A&usqp=CAU',
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Woman',
    Location: 'Cairo',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw6cBK8RQBDoi-q9XVB3Y8Yyhrv4fPlDF3A&usqp=CAU',
  },
  {
    OrderID: 845954,
    CustomerName: 'Eslam Mohamed',
    TotalAmount: 59.99,
    OrderItems: 'Pediatic',
    Location: 'Cairo',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZUAkiXJ6wBElY33-lkR1w-plRf361BlgGQ&usqp=CAU'
  },
  {
    OrderID: 845954,
    CustomerName: 'Habeba Ahmed',
    TotalAmount: 87.99,
    OrderItems: 'Eaderly',
    Location: 'Cairo',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvnWRR38BLQTtCPhUWe-FCo26kyC5A8zI-A&usqp=CAU',
  },
  {
    OrderID: 874534,
    CustomerName: 'Mahmoud Ahmed',
    TotalAmount: 122.99,
    OrderItems: 'Emergancy',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 38489,
    CustomerName: 'Mazen ibrahim',
    TotalAmount: 87.99,
    OrderItems: 'Woman',
    Location: 'Cairo',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw6cBK8RQBDoi-q9XVB3Y8Yyhrv4fPlDF3A&usqp=CAU',
  },
  {
    OrderID: 24546,
    CustomerName: 'Fares Elgen',
    TotalAmount: 84.99,
    OrderItems: 'Pediatic',
    Location: 'Alexanderia',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZUAkiXJ6wBElY33-lkR1w-plRf361BlgGQ&usqp=CAU'
  },
  {
    OrderID: 874534,
    CustomerName: 'Mahmoud Ahmed',
    TotalAmount: 122.99,
    OrderItems: 'Emergancy',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 10248,
    CustomerName: 'Mohamed Elkhadir',
    TotalAmount: 32.38,
    OrderItems: 'Special',
    Location: 'Cairo',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'},
  {
    OrderID: 345653,
    CustomerName: 'Youssef Elmahallawy',
    TotalAmount: 56.34,
    OrderItems: 'Psychiatric',
    Location: 'Alexanderia',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAg7ixL66o3ohqCSEa1lQlY_FFJZ3tfS-Uw&usqp=CAU'
  },
  {
    OrderID: 390457,
    CustomerName: 'Youssef Elsayed',
    TotalAmount: 93.31,
    OrderItems: 'Special',
    Location: 'Aswan',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvnWRR38BLQTtCPhUWe-FCo26kyC5A8zI-A&usqp=CAU',
  },
  {
    OrderID: 893486,
    CustomerName: 'Mohamed Taleet',
    TotalAmount: 93.31,
    OrderItems: 'Special',
    Location: 'Dubai',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'},
  {
    OrderID: 748975,
    CustomerName: 'Mohamed khaled',
    TotalAmount: 23.99,
    OrderItems: 'Emergancy',
    Location: 'Talkha',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Eaderly',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvnWRR38BLQTtCPhUWe-FCo26kyC5A8zI-A&usqp=CAU',
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Woman',
    Location: 'Cairo',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw6cBK8RQBDoi-q9XVB3Y8Yyhrv4fPlDF3A&usqp=CAU',
  },
  {
    OrderID: 845954,
    CustomerName: 'Eslam Mohamed',
    TotalAmount: 59.99,
    OrderItems: 'Pediatic',
    Location: 'Cairo',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZUAkiXJ6wBElY33-lkR1w-plRf361BlgGQ&usqp=CAU'
  },
  {
    OrderID: 845954,
    CustomerName: 'Habeba Ahmed',
    TotalAmount: 87.99,
    OrderItems: 'Eaderly',
    Location: 'Cairo',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvnWRR38BLQTtCPhUWe-FCo26kyC5A8zI-A&usqp=CAU',
  },
  {
    OrderID: 874534,
    CustomerName: 'Mahmoud Ahmed',
    TotalAmount: 122.99,
    OrderItems: 'Emergancy',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 38489,
    CustomerName: 'Mazen ibrahim',
    TotalAmount: 87.99,
    OrderItems: 'Woman',
    Location: 'Cairo',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw6cBK8RQBDoi-q9XVB3Y8Yyhrv4fPlDF3A&usqp=CAU',
  },
  {
    OrderID: 24546,
    CustomerName: 'Fares Elgen',
    TotalAmount: 84.99,
    OrderItems: 'Pediatic',
    Location: 'Alexanderia',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZUAkiXJ6wBElY33-lkR1w-plRf361BlgGQ&usqp=CAU'
  },
  {
    OrderID: 874534,
    CustomerName: 'Mahmoud Ahmed',
    TotalAmount: 122.99,
    OrderItems: 'Emergancy',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 10248,
    CustomerName: 'Mohamed Elkhadir',
    TotalAmount: 32.38,
    OrderItems: 'Special',
    Location: 'Cairo',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU' },
  {
    OrderID: 345653,
    CustomerName: 'Youssef Elmahallawy',
    TotalAmount: 56.34,
    OrderItems: 'Psychiatric',
    Location: 'Alexanderia',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAg7ixL66o3ohqCSEa1lQlY_FFJZ3tfS-Uw&usqp=CAU'
  },
  {
    OrderID: 390457,
    CustomerName: 'Youssef Elsayed',
    TotalAmount: 93.31,
    OrderItems: 'Special',
    Location: 'Aswan',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'},
  {
    OrderID: 893486,
    CustomerName: 'Mohamed Taleet',
    TotalAmount: 93.31,
    OrderItems: 'Special',
    Location: 'Dubai',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRoIhmonGk6DkmrVcuZqKRsNmOkySzC1s-ld9IzVIcI2pVhAU6ThAYA2PzGS5wEWQt0E&usqp=CAU'},
  {
    OrderID: 748975,
    CustomerName: 'Mohamed khaled',
    TotalAmount: 23.99,
    OrderItems: 'Emergancy',
    Location: 'Talkha',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Eaderly',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvnWRR38BLQTtCPhUWe-FCo26kyC5A8zI-A&usqp=CAU',
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Woman',
    Location: 'Cairo',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw6cBK8RQBDoi-q9XVB3Y8Yyhrv4fPlDF3A&usqp=CAU',
  },
  {
    OrderID: 845954,
    CustomerName: 'Eslam Mohamed',
    TotalAmount: 59.99,
    OrderItems: 'Pediatic',
    Location: 'Cairo',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZUAkiXJ6wBElY33-lkR1w-plRf361BlgGQ&usqp=CAU'
  },
  {
    OrderID: 845954,
    CustomerName: 'Habeba Ahmed',
    TotalAmount: 87.99,
    OrderItems: 'Eaderly',
    Location: 'Cairo',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvnWRR38BLQTtCPhUWe-FCo26kyC5A8zI-A&usqp=CAU',
  },
  {
    OrderID: 874534,
    CustomerName: 'Mahmoud Ahmed',
    TotalAmount: 122.99,
    OrderItems: 'Emergancy',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
  {
    OrderID: 38489,
    CustomerName: 'Mazen ibrahim',
    TotalAmount: 87.99,
    OrderItems: 'Woman',
    Location: 'Cairo',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw6cBK8RQBDoi-q9XVB3Y8Yyhrv4fPlDF3A&usqp=CAU',
  },
  {
    OrderID: 24546,
    CustomerName: 'Fares Elgen',
    TotalAmount: 84.99,
    OrderItems: 'Pediatic',
    Location: 'Alexanderia',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZUAkiXJ6wBElY33-lkR1w-plRf361BlgGQ&usqp=CAU'
  },
  {
    OrderID: 874534,
    CustomerName: 'Mahmoud Ahmed',
    TotalAmount: 122.99,
    OrderItems: 'Emergancy',
    Location: 'Cairo',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:  'https://media.istockphoto.com/id/1330919226/photo/group-of-doctors-nurses-paramedics-push-gurney-stretcher-with-seriously-trauma-patient.jpg?s=612x612&w=0&k=20&c=SmWPDdU64qhVVXTnn4tOz8mJ0_00Gbn9Bzsbv4SkLDI=',
  },
];
export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);
export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);
export const ordersGrid = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderItems',
    headerText: 'Item',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Center',
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
];
