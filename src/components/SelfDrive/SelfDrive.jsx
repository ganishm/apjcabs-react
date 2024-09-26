import React, { useState } from 'react';
import './SelfDrive.css';

const faqData = [
    { question: 'Reservation', 
        answer: (
            <div>
                You can access our website and provide the requested information along with your documents and payments.
                You can also book through WhatsApp. It is mandatory to update your documents (valid driving license, 
                address proof, and credit card details/payment details) to make a reservation or at the time of registration.
                <br /><br />
                <strong>WHAT ALL INFORMATION IS REQUIRED FROM ME TO BOOK A CAR?</strong>
                <ul>
                    <li>Your name</li>
                    <li>Mobile number</li>
                    <li>Valid email address</li>
                    <li>A valid driving license, in case you are driving. If the vehicle is to be driven by someone else, their driving license is required.</li>
                    <li>Your credit card details if using your card for payment. If someone else is paying, enter their credit card details.</li>
                    <li>Aadhar card copy, original passport.</li>
                    <li>Security deposit – Rs.10000 for hatchback cars.</li>
                </ul>
                <br />
                <strong>CAN SOMEONE ELSE MAKE A RESERVATION FOR ME?</strong>
                <br />
                Yes, but you need to be present with the required documents to pick up the car at the mentioned pickup location.
                <br /><br />
                <strong>CAN SOMEONE ELSE DRIVE FOR ME DURING MY RESERVATION?</strong>
                <br />
                Only the person whose KYC documents and driving license were submitted during the reservation can drive the vehicle.
                <br /><br />
                <strong>IS THERE A MINIMUM BOOKING CHARGE?</strong>
                <br />
                The minimum booking charge is for a period of 24 hours.
                <br /><br />
                <strong>CAN I PREPONE MY TRIP?</strong>
                <br />
                If you want to take the car earlier, please reschedule your booking. The car is subject to availability.
                <br /><br />
                <strong>HOW MANY HOURS IN ADVANCE DO I NEED TO MAKE A RESERVATION?</strong>
                <br />
                You can book the car at least 4 hours in advance, depending on availability.
                <br /><br />
                <strong>CAN I MODIFY MY RESERVATION?</strong>
                <br />
                Booking modification requests must be made at least 4 hours prior to the rental start time. 
                Modifications to car type and rental start & end times are subject to availability. 
                Switching between 100km and 300km packages is not allowed once the rental has started.
                <br /><br />
                <strong>CAN I EXTEND MY RESERVATION?</strong>
                <br />
                Extension requests must be made at least 4 hours prior to the return time by emailing 
                <strong> selfdrive@apjcabs.com </strong> or calling +91 96 77 111 999. Extensions are subject to vehicle 
                availability. If the car is unavailable, a charge of INR 350 (or per your car type) will be applied as 
                extension/modification charges.
                <br /><br />
                <strong>DO I GET ANY BENEFIT OR CONCESSION IF I RETURN THE CAR EARLIER THAN MY SPECIFIED RETURN TIME?</strong>
                <br />
                No discounts are offered for early return of the car.
                <br /><br />
                <strong>WHAT IS YOUR CANCELLATION POLICY?</strong>
                <br />
                You can cancel the booking via your APJ CABS account on our website/mobile app, by emailing 
                <strong> selfdrive@apjcabs.com </strong>, or calling +91 96 77 111 999. Cancellation charges vary based on 
                the time prior to the scheduled pickup. GST @28% applies to all cancellation charges.
                <br /><br />
                <strong>WHAT IF I DO NOT RECEIVE MY SELF DRIVE CAR ON MY SCHEDULED REPORTING TIME?</strong>
                <br />
                Call our helpline at +91 96 77 111 999 for assistance.
                <br /><br />
                <strong>WHERE IN INDIA CAN I TRAVEL?</strong>
                <br />
                Our cars have an All India Permit, so you can drive anywhere in India. Avoid prohibited areas and bad terrains.
                <br /><br />
                <strong>CAN I DROP THE CAR AT A DIFFERENT LOCATION THAN THE PICKUP LOCATION?</strong>
                <ol>
                    <li>You must return the car to the pickup location. Dropping it elsewhere within the same city incurs a fee of INR 1500 plus the hourly rate and late fees until the car is returned to the correct location.</li>
                    <li>Dropping it outside the city incurs actual transportation costs, plus INR 1500, the hourly rate, and late fees.</li>
                </ol>
                <br />
                <strong>DO YOU HAVE 24/7 RESERVATIONS?</strong>
                <br />
                Booking is available from 9 am to 7 pm IST. International clients can request bookings via WhatsApp. Pickup/drop-off is available anytime.
            </div>
        ) },
    { question: 'Documentation', answer: (<div><strong>IS THERE AN AGREEMENT / DOCUMENT THAT I NEED TO SIGN?</strong><br/>
        Yes, you will need to sign an agreement / car checklist when you come to pick up the car.<br/>
        <strong>SHOULD I SUBMIT ANY DOCUMENTS ?</strong><br/>
        Yes.Apart from Driving License copy ,Aadhar Copy You will have to give the original passport. You will have to send a screenshot of the security deposit or authorize your Credit card for the value of Security Deposit. The Documents will be duly verified by our executive.<br/>
        <strong>WHAT IS THE ELIGIBILITY TO HIRE A SELF DRIVE CAR?</strong><br/>
        The Hirer intending to enter into this Agreement and rent the vehicle on self drive basis should have completed 21 years of age, shall have a driving experience of a minimum of 1 year. <br/>
        <strong>WHAT TYPE OF DRIVER’S LICENSE IS REQUIRED?</strong><br/>
        We require an Indian driver's license or an International Driver's Permit (IDP). Our office will verify original license. The licenses must be for a light motor vehicle (car). The customers do NOT need a specific cab license that is associated with a yellow board plate.<br/>
        <strong>WHAT DOCUMENTS DO I NEED TO PRODUCE WHILE PICKING UP A SELF DRIVE CAR?</strong><br/>
        You need to produce the KYC Documents comprising valid Driving License,photo identity ( Aadhar Card Copy) plus original Passport.<br/>
        <strong>WILL I BE ALLOWED TO USE A CAR IN CASE I FAIL TO PRODUCE THE ORIGINAL DOCUMENTS AT THE TIME OF PICKUP??</strong><br/>
        No. You will not be allowed to rent the vehicle in case you fail to produce the original documents at the time of scheduled vehicle pickup. Besides, we reserve the right to forfeit 100% of your rental amount in such a scenario.
        </div>) },
    { question: 'Operations', answer: (<div><strong>WHEN DOES MY BOOKING START?</strong><br/>
        The booking start time will be the same as selected by you at the time of making the booking.<br/>
        <strong>IN CASE OF 100 KILOMETRE PACKAGE, WHERE DOES THE KILOMETRE COUNT BEGIN FROM AND END AT?</strong><br/>
        In case of 100 km package, the kilometre count shall begin from your point of car pickup and ends at your point of car drop off. That is, the actual km driven by you will be considered for the usage calculation.<br/>
        <strong>WHAT TYPE OF CARS DOES APJ CABS OFFER FOR SELF DRIVE?</strong><br/>
        We offer hatch backs cars presently.<br/>
        <strong>WHAT DO I NEED TO CHECK BEFORE I TAKE THE CAR ON SELF DRIVE?</strong><br/>
        We would advise you to physically inspect the car and sign the checklist.<br/>
        <strong>DOES THE VEHICLE HAVE MANUAL OR AUTOMATIC TRANSMISSION?</strong><br/>
        You may check the vehicle's specifications for these details at the time of booking.<br/>
        <strong>WHAT ARE THE AMENITIES YOU PROVIDE WITH YOUR CAR?</strong><br/>
        All cars are equipped with manufacturer’s standard car accessories. <br/>
        <strong>WHAT IS THE MINIMUM TIME ONE CAN RENT THE CAR FOR?</strong><br/>
        You can hire it for a minimum of 24 hour.<br/>
        <strong>DO YOU HAVE A KILOMETRE LIMIT?</strong><br/>
        Kilometer allowance is dependent on the package chosen at the time of making the booking. Under 100 km package, maximum kilometer allowance is 100 km any usage beyond which will be chargeable on a per kilometer use basis. Similarly for 300 kilometer package on and above 300 kilometers will be charged on per kilometer basis<br/>
        <strong>FOR A 100 KILOMETER PACKAGE, HOW WILL I PAY FOR ANY ADDITIONAL KILOMETRES DRIVEN?</strong><br/>
        The additional kilometre usage charges will be deducted from your security deposit.<br/>
        <strong>WHAT IS THE SPEED LIMIT FOR DRIVING ?</strong><br/>
        APJ CABS allows its customers to drive the car up to a maximum speed of 80 km/hr. In Chennai cars might be equipped with speed governors as per government directives. APJ CABS advises you to follow local speed limits. Government fine for driving the vehicle at a speed above the local speed limit is payable by the customers.<br/>
        <strong>WHO PAYS FOR THE FUEL?</strong><br/>
        Fuel will be filled by the customer. The customers have to return the vehicle back with the same level of fuel as in the gauge while picking up.If the fuel level while returning is lesser there will be charge of Rs.200 plus along with the fuel charges. The charges for re-fueling along with service charge shall be deducted from the Security Deposit.<br/>
        
        <strong>WHO PAYS FOR PARKING/TOLL/STATE TAX?</strong><br/>
        The User of the Car Rental pays for the parking/toll and taxes.<br/>
        <strong>CAN I GET A CAR AT ANY LOCATION I DESIRE?</strong><br/>
        Yes, You may opt for doorstep pickup/drop off at the time of making the booking at an additional charge of Rs 300/- each for pickup and drop off. The charges might also vary based on the distance. However, doorstep pickup/drop off service will not be available between 22:00 hours to 6:00 hours.<br/>
        <strong>IS SMOKING AND DRINKING ALLOWED IN CAR?</strong><br/>
        Smoking and drinking are strictly not allowed inside the car<br/>
        <strong>DO I NEED TO CLEAN THE CAR?</strong><br/>
        Unclean cars will attract a cleaning charge of INR 750. We recommend continuous cleaning of car for your hygiene &amp; comfort.<br/>
        <strong>WHAT ABOUT ANY BELONGINGS LEFT IN THE CAR AT THE TIME OF HANDOVER?</strong><br/>
        APJ CABS does not take the responsibility for any of your belongings. However, we suggest you to contact our call center and we will try our best to help you.<br/>
        <strong>WHAT ARE THE IMPORTANT DOCUMENTS I HAVE TO CARRY WHEN I HAVE TO DRIVE ACROSS STATE BORDER?</strong><br/>
        You will need to carry your driving license, car’s original Registration book, Self-Drive License, All India Permit, Car fitness certificate, Insurance Copy, and PUC (Pollution under Control Certificate).<br/>
        <strong>DOES APJ CABS PROVIDE ROAD SIDE ASSISTANCE?</strong><br/>
        Yes, If within Chennai. You can call us on our helpline number +91 96 77 111 999, and we will try our best if away from Chennai as well.

    </div>) },
    { question: 'Incidents', answer: (<div><strong>WHAT HAPPENS IN CASE OF AN ACCIDENT?</strong><br/>
        1. APJ CABS requests you to immediately notify us (within 4 hours) by calling on our helpline number +91 96 77 111 999 or by sending us an email on selfdrive@apjcabs.com. We will coordinate accordingly with our road-side assistance provider.<br/>
        2. Please file an FIR at the nearest police station. Do not leave the scene of the accident until proper support has arrived. You may be required to sign several formality documents associated with the accident.<br/>
        <strong>WHAT HAPPENS IN CASE OF A BREAK DOWN?</strong><br/>
        APJ CABS  requests you to immediately notify us (within 4 hours) by calling on our helpline number +91 96 77 111 999 or by sending us an email on selfdrive@apjcabs.com. Our 24X7 experienced technical team will assist you in case of break down .<br/>
        <strong>WHAT HAPPENS IN CASE OF A DAMAGE?</strong><br/>
        Damage cost up to INR 6,000/- is to be paid by Hirer, and it will be deducted from the security deposit. In case damage is more than INR 6,000, an insurance claim will be filed; the amount of depreciation and parts which are not covered under insurance will be borne by the Hirer. In case the customer is found violating the terms &amp; conditions of APJ CABS, then the maximum cap of INR 6000 will not be applicable the assessment of damage made by APJ CABS will be final.<br/>
        <strong>WHAT HAPPENS IN CASE IF THE CAR IS STOLEN?</strong><br/>
        1. An FIR needs to be registered immediately (within 4 hours) &amp; the same needs to be informed to us by email at selfdrive@apjcabs.com.<br/>
        2. In case of theft /total loss of the Vehicle during the Hire Period, the Hirer shall be liable to bear the damages as specified in the Agreement. The Security Deposit paid by the Hirer shall be adjusted against such loss and/or damage. Any theft in the Vehicle with respect to Vehicle parts and/or accessories shall be charged as per the Schedule of charges. If the security deposit is not enough to cover the damage the hirer has to pay APJ CABS the loss incurred and the assessment made by APJ CABS will be final.<br/>
        <strong>WHAT HAPPENS IN CASE THE CAR DAMAGE IS DUE TO NEGLIGENCE?</strong><br/>
        The Hirer shall be liable to pay charges as stipulated in the Schedule of Charges mentioned as part of the Agreement.
        </div>) },
    { question: 'Insurance Cover', answer: (<div><strong>WHAT IS THE INSURANCE COVER?</strong><br/>
        Damage costs up to INR 6,000/- is to be paid by Hirer. In case the damage is more than INR 6,000, an insurance claim will be filed. The amount of depreciation and parts which are not covered under insurance will be borne by the Hirer.<br/>
        In case the customer is found to violate the APJ CABS terms &amp; conditions then the maximum cap of INR 6000 will not be applicable. The assessment of damage made by APJ CABS will be final.
       </div>) },
    { question: 'Payment', answer: (<div><strong>WHAT MODE OF PAYMENTS ARE ACCEPTED?</strong><br/>
        APJ CABS accepts payments by Digital payments like Gpay,Phonepe,Paytm ,credit cards (visa/master card) and net banking. All rental payments are made in advance. However, the Security Deposit should be paid before taking delivery of the car. We do not accept cash.<br/>
        <strong>ARE THERE ANY TAXES ON THE RENTAL AMOUNT?</strong><br/>
        Yes, GST is included in Rental amount. Any other extension, additional or Cancellation charges will attract 28% GST.<br/>
        <strong>IS SECURITY DEPOSIT DIFFERENT FOR DIFFERENT CAR MODEL?</strong><br/>
        Presently Hatchback cars are only available and the the security deposit will be INR 10000.<br/>
        <strong>HOW WILL YOU REFUND MY SECURITY DEPOSIT?</strong><br/>
        We will refund your Security Deposit to the source of payment, which may be your credit card or bank, whichever you used at the time of booking.<br/>
        <strong>WHEN WILL I GET MY REFUND BACK?</strong><br/>
        We process your refund request within  7-10 working days .However we are not responsible for the time  your bank takes to credit the same into your account.<br/>
        <strong>WILL I GET A PHYSICAL BILL?</strong><br/>
        The copy of the invoice will be mailed to you on your registered e-mail ID.
    </div>) },
    { question: 'Schedule of Charges', answer: (<div>
        <div>
    <table className="charges-table">
        <thead>
            <tr>
                <th>SR.NO</th>
                <th>NON-COMPLIANCE</th>
                <th>CHARGES</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-title="Column 1">1</td>
                <td data-title="Column 1">Driving at a speed above the maximum speed of 80 km/hr.(as per Supreme Court ruling for Commercial vehicles)</td>
                <td data-title="Column 1">1st Instance &gt;= 80 km/hr. - INR 2500 + GOVT. fines (if any) plus expulsion from APJ CABS PRIVATE LIMITED if it happens again in the next booking<br/>
                2nd Instance &gt;= 80km/hr. - INR 2500 + GOVT. fines (if any) plus expulsion from APJ CABS PRIVATE LIMITED</td>
            </tr>
            <tr>
                <td data-title="Column 2">2</td>
                <td data-title="Column 2">Traffic violation</td>
                <td data-title="Column 2">INR 1,000 in addition to the actual fine charged due to traffic violation will be charged from  the User</td>
            </tr>
            <tr>
                <td data-title="Column 3">3</td>
                <td data-title="Column 3">Car spare part changed</td>
                <td data-title="Column 3">The User will be charged a penalty of INR 5000 over and above the cost of spare part.</td>
            </tr>    
            <tr>
                <td data-title="Column 1">4</td>
                <td data-title="Column 1">Tyre misuse</td>
                <td data-title="Column 1">In case of any tyre damages resulting from driving in bad terrain and continued driving in case of tyre puncture, customers will be charged for the cost of tyre on actuals</td>
            </tr>
            <tr>
                <td data-title="Column 2">5</td>
                <td data-title="Column 2">Performing any unauthorized activity such as carrying arms and ammunition, any intoxication, commercial activity</td>
                <td data-title="Column 2">INR 5,000 will be charged as penalty .The user will be held liable for any legal action arising out of these activities</td>
            </tr>
            <tr>
                <td data-title="Column 3">6</td>
                <td data-title="Column 3">External branding</td>
                <td data-title="Column 3">INR 5,000 will be charged as penalty.  Any expenses arising out of repair cost or such damages will be charged to the User along with the penalty.</td>
            </tr>    
                <tr>
                <td data-title="Column 1">7</td>
                <td data-title="Column 1">Tampering with the devices such as GPS etc.</td>
                <td data-title="Column 1">INR 5000 plus the actual cost of the repair or the fitment will be charged from the User.</td>
            </tr>
            <tr>
                <td data-title="Column 2">8</td>
                <td data-title="Column 2">Failure to return the car at the scheduled location</td>
                <td data-title="Column 2">You will be charged INR 1500, plus the full hourly rate and the late fees until the vehicleis returned to the correct location.</td>
            </tr>
            <tr>
                <td data-title="Column 3">9</td>
                <td data-title="Column 3">Incase the vehicle is dropped outside city limits of the pick-up location</td>
                <td data-title="Column 3">Actual cost for transporting the car to the correct location plus INR 1500, plus the full hourly rate and the late fees until the vehicle is returned to the correct location.</td>
            </tr>    
                <tr>
                <td data-title="Column 1">10</td>
                <td data-title="Column 1">Delay in returning of car beyond the scheduled time</td>
                <td data-title="Column 1">A charge of INR350 over and above the per hour rate (as per your car type) will be charged as delay charges.</td>
            </tr>
            <tr>
                <td data-title="Column 2">11</td>
                <td data-title="Column 2">Extension of car usage beyond the scheduled time</td>
                <td data-title="Column 2">Inform via a call or email a minimum of 4 hrs prior to return time &amp; subject to availability.<br/>Incase of nonavailibility a charge of INR 350 over and above the per hour rate (as per your car type) will be charged as extension charges.</td>
            </tr>
            <tr>
                <td data-title="Column 3">12</td>
                <td data-title="Column 3">Loss of car accessories such as [Baby seat, Tablet etc.]</td>
                <td data-title="Column 3">INR 5000 or actual cost of the accessory</td>
            </tr> 
            <tr>
                <td data-title="Column 3">13</td>
                <td data-title="Column 3">Unclean Car or littering /dirtying the car</td>
                <td data-title="Column 3">Unclean cars will attract cleaning charge of INR 500 for a minor cleaning &amp; a charge of INR 1000  for a major cleaning as penalty.</td>
            </tr> 
            <tr>
                <td data-title="Column 3">14</td>
                <td data-title="Column 3">Causing any damage to the car</td>
                <td data-title="Column 3">The User will be obligated to pay the repair cost up to INR 6000 or the standard insurance deductible payment (up to INR 6000). In the event the user is found to violate APJ CABS PRIVATE LIMITED terms and conditions  the maximum cap of INR 6000 will not be applicable.</td>
            </tr> 
            <tr>
                <td data-title="Column 3">15</td>
                <td data-title="Column 3">Failure to return car keys</td>
                <td data-title="Column 3">A fine of INR 2500 will be charged plus replacement cost incurred will be charged to the User</td>
            </tr> 
            <tr>
                <td data-title="Column 3">16</td>
                <td data-title="Column 3">Failure to return the original car documents</td>
                <td data-title="Column 3">A fine of INR 10,000 will be charged along with the actual charges incurred for re- documentation.</td>
            </tr> 
            <tr>
                <td data-title="Column 3">17</td>
                <td data-title="Column 3">The User does not turn up to pick up the car/No Show</td>
                <td data-title="Column 3">1 day rental will be charged</td>
            </tr> 
            <tr>
                <td data-title="Column 3">18</td>
                <td data-title="Column 3">Driving under the influence of alcohol or drugs or is suffering from any disease or disability, which may cause his / her driving ability or which is likely to cause a source of danger to the public and/or to the Vehicle.</td>
                <td data-title="Column 3">Complete Security Deposit will be forfeited over and above the actual damage cost incurred.</td>
            </tr> 
            <tr>
                <td data-title="Column 3">19</td>
                <td data-title="Column 3">Any intentional damage such as continuing to drive after accident or under extreme conditions or rash driving etc.</td>
                <td data-title="Column 3">Complete Security Deposit will be forfeited over and above the actual damage cost incurred.</td>
            </tr> 
            <tr>
                <td data-title="Column 3">20</td>
                <td data-title="Column 3">The User not driving himself</td>
                <td data-title="Column 3">Complete Security Deposit will be forfeited over and above the actual damage cost if incurred.</td>
            </tr> 
            <tr>
                <td data-title="Column 3">21</td>
                <td data-title="Column 3">Cancellation</td>
                <td data-title="Column 3"><b>For Daily rentals Before 24 hours of the pick-up time: no charge, full refund Less than 24hrs to the pick-up time/No Show : 1 day rental will be charged For Hourly rentals : No charge prior to 24 hINR of the pick-up time. Between 6 hrs to 23.59 hrs 50% of the trip cost. Less than 6 hrs –Entire contracted Rental Charges for the trip shall be charged.</b></td>
            </tr> 
            <tr>
                <td data-title="Column 3">22</td>
                <td data-title="Column 3">Fuel</td>
                <td data-title="Column 3">We offer the cars by noting the fuel level in gauge and accept it back with the same level. If the vehicle is handed over with less fuel Rs.200 will be charged over and above the refilling amount. The charges for refueling along with service charge shall be deducted from the Security Deposit.</td>
            </tr> 
            <tr>
                <td data-title="Column 3">23</td>
                <td data-title="Column 3">Carrying number of persons (excluding the driver) exceeding the permissible number as specified in Motor Vehicle Act, 1988 and Rules framed thereunder (the Act)</td>
                <td data-title="Column 3">INR 5,000 will be charged as penalty .The user will be held liable for any legal action arising out of these activities</td>
            </tr> 
            <tr>
                <td data-title="Column 3">24</td>
                <td data-title="Column 3">If ferrying passengers or any goods for consideration or reward whether expressed or implied.</td>
                <td data-title="Column 3">INR 5,000 will be charged as penalty .The user will be held liable for any legal action arising out of these activities</td>
            </tr> 
            <tr>
                <td data-title="Column 3">25</td>
                <td data-title="Column 3">Carrying pets or any type of animals</td>
                <td data-title="Column 3">A charge of INR 750 will be levied as penalty.</td>
            </tr> 
            <tr>
                <td data-title="Column 3">26</td>
                <td data-title="Column 3">Pick up &amp; Drop facility of Car</td>
                <td data-title="Column 3">The pick up or drop facility will be charged starting from INR 300 per trip within the city of pickup</td>
            </tr> 
            <tr>
                <td data-title="Column 3">27</td>
                <td data-title="Column 3">Extra Chauffeur charges incase of a Self Driven car  taken with a chauffeur</td>
                <td data-title="Column 3">INR 100 per hour with a minimum billing of 8 hours</td>
            </tr>
            <tr>
                <td data-title="Column 3">28</td>
                <td data-title="Column 3">Smoking</td>
                <td data-title="Column 3">INR 1000 + applicable damages to vehicle interiors</td>
            </tr>
                                       
        </tbody>
    </table>
</div>
    </div>) },

    {question: 'Damage Charges', answer: (<div >
        <div className="charges-table">Pl find the damage charges for the below category vehicles.<br/><br/>
    <table>
        <thead>
            <tr>
                <th>SR.NO</th>
                <th>VARIANT DETAILS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-title="Column 1">A</td>
                <td data-title="Column 1">Ford Figo</td>
            </tr>
            <tr>
                <td data-title="Column 2">B</td>
                <td data-title="Column 2">Hyundai i20</td>
            </tr>
        </tbody>
    </table>
    <table>
        <thead>
            <tr>
                <th>SR.NO</th>
                <th>PANEL NAME</th>
                <th>A</th>
                <th>B</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-title="Column 1">1</td>
                <td data-title="Column 1">Front Bumper</td>
                <td data-title="Column 1">2000</td>
                <td data-title="Column 1">2200</td>
            </tr>
            <tr>
                <td data-title="Column 2">2</td>
                <td data-title="Column 2">Hood</td>
                <td data-title="Column 2">2000</td>
                <td data-title="Column 2">2200</td>
            </tr>
            <tr>
                <td data-title="Column 2">3</td>
                <td data-title="Column 2">Fender</td>
                <td data-title="Column 2">2000</td>
                <td data-title="Column 2">2200</td>
            </tr>
            <tr>
                <td data-title="Column 2">4</td>
                <td data-title="Column 2">Door</td>
                <td data-title="Column 2">2000</td>
                <td data-title="Column 2">2200</td>
            </tr>
            <tr>
                <td data-title="Column 2">5</td>
                <td data-title="Column 2">Quarter Panel</td>
                <td data-title="Column 2">2000</td>
                <td data-title="Column 2">2200</td>
            </tr>
            <tr>
                <td data-title="Column 2">6</td>
                <td data-title="Column 2">Boot Lid</td>
                <td data-title="Column 2">2000</td>
                <td data-title="Column 2">2200</td>
            </tr>
            <tr>
                <td data-title="Column 2">7</td>
                <td data-title="Column 2">Rear Bumper</td>
                <td data-title="Column 2">2000</td>
                <td data-title="Column 2">2200</td>
            </tr>
            <tr>
                <td data-title="Column 2">8</td>
                <td data-title="Column 2">Roof</td>
                <td data-title="Column 2">2000</td>
                <td data-title="Column 2">3000</td>
            </tr>
            <tr>
                <td data-title="Column 2">9</td>
                <td data-title="Column 2">Rear View Mirror</td>
                <td data-title="Column 2">500</td>
                <td data-title="Column 2">600</td>
            </tr>
            <tr>
                <td data-title="Column 2">10</td>
                <td data-title="Column 2">Running Board</td>
                <td data-title="Column 2">1500</td>
                <td data-title="Column 2">1500</td>
            </tr>
            <tr>
                <td data-title="Column 2">11</td>
                <td data-title="Column 2">A Pillar</td>
                <td data-title="Column 2">1500</td>
                <td data-title="Column 2">1500</td>
            </tr>
            <tr>
                <td data-title="Column 2">12</td>
                <td data-title="Column 2">Wheel Caps</td>
                <td data-title="Column 2">1500</td>
                <td data-title="Column 2">1500</td>
            </tr>
            <tr>
                <td data-title="Column 2">13</td>
                <td data-title="Column 2">Tail Lamp</td>
                <td data-title="Column 2">2500</td>
                <td data-title="Column 2">4500</td>
            </tr>
            <tr>
                <td data-title="Column 2">14</td>
                <td data-title="Column 2">Fog Lamp</td>
                <td data-title="Column 2">1800</td>
                <td data-title="Column 2">2000</td>
            </tr>
            <tr>
                <td data-title="Column 2">15</td>
                <td data-title="Column 2">Number Plate</td>
                <td data-title="Column 2">600</td>
                <td data-title="Column 2">600</td>
            </tr>
        </tbody>
    </table>
    <table>
        <thead>
            <tr>
                <th>SR.NO</th>
                <th colspan="3">REMOVE AND FIT SCHEDULE</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-title="Column 1">1</td>
                <td data-title="Column 1">Rear View Mirror</td>
                <td data-title="Column 1">150</td>
                <td data-title="Column 1">200</td>
            </tr>
            <tr>
                <td data-title="Column 2">2</td>
                <td data-title="Column 2">Front Windshield</td>
                <td data-title="Column 2">1000</td>
                <td data-title="Column 2">1200</td>
            </tr>
            <tr>
                <td data-title="Column 2">3</td>
                <td data-title="Column 2">Rear Windshield</td>
                <td data-title="Column 2">1000</td>
                <td data-title="Column 2">1200</td>
            </tr>
        </tbody>
    </table>
</div>
    </div>)}
    
];
const terms = [
    "Usage is limited inside Tamil Nadu. Those who plan to drive to other states must contact us for further details.",
    "Fuel will be fully filled while handing over and the customer must return the car with a fully filled tank.",
    "Vehicle delivery and pick up can be arranged for an additional charge based on the distance.",
    "Vehicles will be fitted with GPRS systems. Any damage to this system will be chargeable.",
    "In case of extensions, additional charges are required to be paid in advance.",
    "Payments can be made at our office or transferred to our accounts.",
    "Any damages to the car while in the possession of a customer can be limited with the Damage Waiver Insurance, which is compulsory.",
    "Necessary parts of the vehicle will be sealed and tampering with them is not permitted. Customers shall be penalized for any modifications or damages in this respect. Our decision on the matter will be final.",
    "We solely retain the decision to provide cars/services and we hold the right to retake our cars or recall our services at any point if we suspect suspicious activities.",
    "It must be noted that our cars may only be used lawfully. No illegal goods must be transported or illegal activities must take place with our cars involved. This will be strictly monitored."
  ];
const SelfDrive = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const half = Math.ceil(faqData.length / 2);
    const column1 = faqData.slice(0, half);
    const column2 = faqData.slice(half);
    return (
        <>
            {/* Hero Section */}
            <section className="self-drive-hero-section text-center position-relative">
                <div className="banner-container">
                    <div className="self-drive-banner-image">
                        <img src="/images/banner_all.png" alt="Car Banner" className="img-fluid hero-image" />
                    </div>
                    <div className="banner-text">
                        <h1>Self Drive <span>Car Rental</span></h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="self-drive-content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 content-left">
                            <h2>Self-Driving-Car-Rental-In-Chennai</h2>
                            <p>Self-driven cars are only available for long-term hiring—Minimum duration is 15 days.</p>
                            <h3>Requirements</h3>
                            <ul>
                                <li>Internationally valid Driving License</li>
                                <li>Deposit of ₹ 20,000 along with hiring charges to be paid in advance</li>
                                <li>Landline reference numbers with bill statement copies</li>
                                <li>Address Proof in Chennai</li>
                            </ul>
                            <p>Bookings will be honoured after the verification process.</p>
                            <a href="/" className="download-link">Click Here to Download Rental Agreement</a>
                        </div>
                        <div className="col-md-4 content-right">
                            <img src="/img/self-drive.jpg" alt="Car Rental" className="img-fluid rental-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Table Section */}
            <section className="self-drive-pricing-section">
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Type of Cars</th>
                                <th>Charges for 15 Days upto 4000 kms</th>
                                <th>Charges for Extra Day with 300 kms</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Maruthi swift or equivalent</td>
                                <td>Rs. 37500</td>
                                <td>Rs. 3000</td>
                            </tr>
                            <tr>
                                <td>Innova Crysta</td>
                                <td>Rs. 75000</td>
                                <td>Rs. 5500</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="note">* Fuel cost not included in tariff.<br/>* Cess additional.</p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
            <div className="container">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-columns">
                    <div className="faq-column">
                        {column1.map((item, index) => (
                            <div 
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                                key={index} 
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">
                                    {item.question}
                                    <span className="faq-toggle-icon">
                                        {activeIndex === index ? '-' : '+'}
                                    </span>
                                </div>
                                {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
                            </div>
                        ))}
                    </div>
                    <div className="faq-column">
                        {column2.map((item, index) => (
                            <div 
                                className={`faq-item ${activeIndex === (index + half) ? 'active' : ''}`} 
                                key={index + half} 
                                onClick={() => toggleFAQ(index + half)}
                            >
                                <div className="faq-question">
                                    {item.question}
                                    <span className="faq-toggle-icon">
                                        {activeIndex === (index + half) ? '-' : '+'}
                                    </span>
                                </div>
                                {activeIndex === (index + half) && <div className="faq-answer">{item.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="terms-section">
      <div className="container">
        <h2 className="section-title">Terms and Conditions</h2>
        <ul className="terms-list">
          {terms.map((term, index) => (
            <li key={index} className="term-item">
              <span className="term-icon">&#x2713;</span> {term}
            </li>
          ))}
        </ul>
      </div>
    </section>
        </>
    );
};

export default SelfDrive;
