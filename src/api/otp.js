const backendUrl = "https://backend.fastmoneyplus.com/api/user";

export const sendMobileOtp = async (phoneNumber) => {
  try {
    const response = await fetch(`${backendUrl}/send-mobile-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: "91" + phoneNumber,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    return { success: false, message: "Failed to send OTP" };
  }
};

export const verifyMobileOtp = async (phoneNumber, orderId, otp) => {
  try {
    const response = await fetch(`${backendUrl}/verify-mobile-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: "91" + phoneNumber,
        orderId: orderId,
        otp: otp,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    return { success: false, message: "Failed to verify OTP" };
  }
};