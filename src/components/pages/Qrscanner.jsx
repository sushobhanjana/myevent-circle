import React, { useRef, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Layouts from "../ui/layouts";
import QrScanner from "qr-scanner";
import QrFrame from "./../../assets/qr-frame.svg";
import "./qrscanner.css";

function Qrscanner() {
  // QR States
  const scanner = useRef();
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);

  // Result
  const [scannedResult, setScannedResult] = useState("");

  // Success
  const onScanSuccess = (result) => {
    // 🖨 Print the "result" to browser console.
    console.log(result);
    // ✅ Handle success.
    // 😎 You can do whatever you want with the scanned result.
    setScannedResult(result?.data);
  };

  // Fail
  const onScanFail = (err) => {
    // 🖨 Print the "err" to browser console.
    console.log(err);
  };

  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      // 👉 Instantiate the QR Scanner
      scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
        onDecodeError: onScanFail,
        // 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
        preferredCamera: "environment",
        // 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
        highlightScanRegion: true,
        // 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
        highlightCodeOutline: true,
        // 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
        overlay: qrBoxEl?.current || undefined,
      });

      // 🚀 Start QR Scanner
      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    // 🧹 Clean up on unmount.
    // 🚨 This removes the QR Scanner from rendering and using camera when it is closed or removed from the UI.
    return () => {
      if (!videoEl?.current) {
        scanner?.current?.stop();
      }
    };
  }, []);

  // ❌ If "camera" is not allowed in browser permissions, show an alert.
  useEffect(() => {
    if (!qrOn)
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
  }, [qrOn]);

  return (
    <Layouts>
      <Container maxWidth="lg" sx={{ mt: 10, mb: 8 }}>
        <Grid container spacing={2}>
          {/* Recent Orders */}
          <Grid item xs={6}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <div className="qr-reader">
                {/* QR */}
                <video ref={videoEl}></video>
                <div ref={qrBoxEl} className="qr-box">
                  <img
                    src={QrFrame}
                    alt="Qr Frame"
                    width={256}
                    height={225}
                    className="qr-frame"
                  />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <p>Scanned Result: </p>
                {/* Show Data Result if scan is success */}
                {scannedResult && (
                  <p
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      color: "red",
                    }}
                  >
                    {scannedResult}
                  </p>
                )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layouts>
  );
}

export default Qrscanner;
