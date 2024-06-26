export const appointmentConfirmation = ({ PatientName, DoctorName, videoLink, Date, startingTime, endingTime, phoneNo }: { PatientName: string, DoctorName: string, videoLink: string, Date: string, startingTime: string, endingTime: string, phoneNo: string }) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Course Registration Confirmation</title>
    </head>
    
    <body style="background-color: #fff;">
    
        <div style="margin: auto; max-width: 32rem;">
            <div style="border: 1px solid #3b82f6; border-radius: 0.5rem; padding: 1.5rem; background-color: #dbeafe; margin-bottom: 1.5rem; border-radius: 2vh;">
    
                <img style="display: block; margin: auto; width: 400px; height: auto; border-radius: 2vh;" src="https://i.ibb.co/09sZrYC/cover.png" alt="HealthHub Logo" loading="lazy">
    
                <div style="width: 4vw; animation: change 5s ease-in-out infinite;" class="text-green-500 bg-white font-extrabold italic ml-auto mr-auto my-4 text-6xl p-2 rounded-full text-center">&#10003</div>
    
                <div style="font-size: 1.5rem; font-weight: bold; color: #2563eb; text-align: center; margin-top: 1.5rem; letter-spacing: 3px;" class="text-2xl my-5 font-bold text-[#010033]">Appointment Confirmation</div>
                <div style="font-size: 1rem; color: #4b5563; text-align: center; margin-top: 1.5rem; font-style: italic;" class="text-lg mb-5">  
                    <p>Dear ${PatientName},</p>
                    <p>
                        You have successfully booked an appointment with <span style="font-weight: bold; color: #010033;">"${DoctorName}"</span>.
                    </p>
                    <p>
                        Appointment Details : &nbsp;
                        Date <span style="font-weight: bold; color: #010033;">"${Date}"</span> &nbsp;
                        Time <span style="font-weight: bold; color: #010033;">"${startingTime} to ${endingTime}"</span>
                    </p>
                    <p>
                        Phone number: ${phoneNo}
                        ${videoLink ? `<p>Meeting link ${videoLink}</p>` : " "}
                    </p>
                </div>
                <div style="font-size: 0.875rem; color: #4b5563; text-align: center; margin-top: 1.5rem; font-style: italic;" class="text-sm text-gray-600 italic">
                    If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:wdevelopment296@gmail.com" class="text-blue-600">wdevelopment296@gmail.com</a>. We are here to help!
                </div>
            </div>
        </div>
    
    </body>
    
    </html>
    `;
}
