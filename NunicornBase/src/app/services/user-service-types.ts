export class User {

  userId?: number;
  userEmail?: string;
  displayName?: string;
  firstName?: string;
  surname?: string;
  userRole?: string;
  sessionXSRFtoken?: string;
  registrationDate?: Date;
  userProfile?: UserProfile;


  constructor(data: { userId?: number, userEmail?: string, displayName?: string,
    firstName?: string, surname?: string, userProfile?: UserProfile, userRole?: string
    registrationDate?: Date, sessionXSRFtoken?: string}) {
    this.userId = data.userId;
    this.userEmail = data.userEmail;
    this.displayName = data.displayName;
    this.firstName = data.firstName;
    this.surname = data.surname;
    this.userProfile = data.userProfile;
    this.registrationDate = data.registrationDate;
    this.userRole = data.userRole;
    this.sessionXSRFtoken = data.sessionXSRFtoken;
  }
}

export class UserProfile {
  id?: string | number;
  addresses?: Address[];
  dateOfBirth?: string;
  mobilePhoneNumber?: string;
  homePhoneNumber?: string;
  gender?: string;
  nationality?: string;
  countryOfResidence?: string;
  occupation?: string;
  avatar?: string;
  facebookProfile?: string;
  twitterProfile?: string;
  googlePlusProfile?: string;
  linkedInProfile?: string;


  constructor(data:
                {
                  id?: string | number,
                  addresses?: Address[],
                  dateOfBirth?: string,
                  mobilePhoneNumber?: string,
                  homePhoneNumber?: string,
                  gender?: string,
                  nationality?: string,
                  countryOfResidence?: string,
                  occupation?: string,
                  avatar?: string,
                  facebookProfile?: string,
                  twitterProfile?: string,
                  googlePlusProfile?: string,
                  linkedInProfile?: string
                }) {
    this.id = data.id;
    this.addresses = data.addresses;
    this.dateOfBirth = data.dateOfBirth;
    this.mobilePhoneNumber = data.mobilePhoneNumber;
    this.homePhoneNumber = data.homePhoneNumber;
    this.gender = data.gender;
    this.nationality = data.nationality;
    this.countryOfResidence = data.countryOfResidence;
    this.occupation = data.occupation;
    this.avatar = data.avatar;
    this.facebookProfile = data.facebookProfile;
    this.twitterProfile = data.twitterProfile;
    this.googlePlusProfile = data.googlePlusProfile;
    this.linkedInProfile = data.linkedInProfile
  }
}

export class Address {
  id: string | number;
  houseNumber: number;
  street: string;
  town: string;
  country: string;
  postcode: string;


  constructor(data: { id: string | number, houseNumber: number, street: string, town: string, country: string, postcode: string}) {
    this.id = data.id;
    this.houseNumber = data.houseNumber;
    this.street = data.street;
    this.town = data.town;
    this.country = data.country;
    this.postcode = data.postcode;
  }
}
