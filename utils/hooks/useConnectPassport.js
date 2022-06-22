import { useCallback, useEffect, useState } from "react";
import { PassportVerifier } from "../passport-sdk-verifier/verifier";

export const useConnectPassport = (address) => {
  const [connected, setConnected] = useState(false);
  const [passport, setPassport] = useState(false);
  const connect = useCallback(async () => {
    const handleError = () => {
      setConnected(false);
      setPassport(false);
    };
    const handleConnect = (passport) => {
      setConnected(true);
      setPassport(passport);
    };

    try {
      const verifier = new PassportVerifier();
      if (address) {
        verifier
          .verifyPassport(address)
          .then((result) => handleConnect(result));
      }
    } catch (e) {
      handleError();
    }
  }, [address]);

  useEffect(() => {
    connect();
  }, [connect]);

  return { connected, connect, passport };
};
