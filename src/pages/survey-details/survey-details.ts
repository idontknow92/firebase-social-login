import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the SurveyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey-details',
  templateUrl: 'survey-details.html',
})
export class SurveyDetailsPage {
  private coachingOptFor: any;
  private user: any = {};
  private mailText : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alrtCntrl: AlertController, private emailCmpsr: EmailComposer) {
  }

  ionViewDidLoad() {
    this.coachingOptFor = this.navParams.get('cardClicked');
    console.log(this.coachingOptFor);
    if (this.coachingOptFor == 'personalCoaching') {
      this.user.coachingOptFor = 'Personal Coaching';
    } else if (this.coachingOptFor == 'careerCoaching') {
      this.user.coachingOptFor = 'Career Coaching';
    } else if (this.coachingOptFor == 'studentCoaching') {
      this.user.coachingOptFor = 'Student Coaching';
    } else {
      this.user.coachingOptFor = 'Corporate Coaching';
    }
    console.log('ionViewDidLoad SurveyDetailsPage');
  }

  private submitData() {
    console.log(this.user);
    if (this.user.name == null || this.user.name == undefined) {
      alert('Enter Name');
    } else if (this.user.phone == null || this.user.phone == undefined) {
      alert('Enter Phone');
    } else if (this.user.client == null || this.user.client == undefined) {
      alert('Please choose a client');
    } else if (this.user.timeLine == null || this.user.timeLine == undefined) {
      alert('Please choose a time line');
    } else {
      alert('User data successfully entered');
      this.composeEmail();
    }

  }

  private composeEmail() {
    // const that = this;
    // this.emailCmpsr.isAvailable().then(available => {
    //   console.log('email composer is Available');
    //   let email = {
    //     to: 'kumar.pvsrk@gmail.com',
    //     subject: 'Survey Details',
    //     body: 'Name : ' + this.user.name + '&nbsp; Phone :' + this.user.phone + '&nbsp; Coaching Opted For :' + this.user.coachingOptFor + '&nbsp; If you are choosing this coaching service for school student, confirm that you are a parent/teacher of the client: ' + this.user.client + '&nbsp; Describe what is the expectation you have from the coaching service: &nbsp; ' + this.user.expectation + '&nbsp; What is the time line you are looking for starting the coaching: &nbsp; ' + this.user.timeLine,
    //     isHtml: true
    //   };
    //   that.emailCmpsr.open(email);
    // }).catch(err => {
    //   console.log('Error in availablitiy of email : ',err);
    // })
    this.mailText = 'mailto:pearlcoaching.in@gmail.com?subject=Survey Details&body=Name : '+this.user.name +',%0D%0A%0D%0A Phone :' + this.user.phone + ',%0D%0A%0D%0A Coaching Opted For : ' + this.user.coachingOptFor + ',%0D%0A%0D%0A If you are choosing this coaching service for school student, confirm that you are a parent/teacher of the client: ' + this.user.client + ',%0D%0A%0D%0A Describe what is the expectation you have from the coaching service: ' + this.user.expectation + ',%0D%0A%0D%0A What is the time line you are looking for starting the coaching: ' + this.user.timeLine;
    window.location.href = this.mailText;
    
  }

}
