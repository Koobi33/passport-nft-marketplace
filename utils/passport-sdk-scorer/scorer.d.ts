import { PassportReader } from "@gitcoinco/passport-sdk-reader";
import { PassportVerifier } from "@gitcoinco/passport-sdk-verifier";
import { Passport, Stamp } from "@gitcoinco/passport-sdk-types";
declare type Criteria = {
  provider: string;
  issuer: string;
  score: number;
};
export declare class PassportScorer {
  _reader: PassportReader;
  _verifier: PassportVerifier;
  _criteria: Criteria[];
  constructor(criteria: Criteria[], url?: string, network?: string);
  getScore(
    address: string,
    passport?: Passport,
    additionalStampChecks?: (stamp: Stamp) => boolean
  ): Promise<number>;
}
export {};
