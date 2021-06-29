import React from "react";
import RandomChar from "./randomChar";
import { shallow } from "enzyme";

describe("Testing <RandomChar/>", () => {
    const char = shallow(<RandomChar />);
    describe("TEsting snap & state", () => {        
        it("RandomChar have rendered correctly", () => {
            expect(char).toMatchSnapshot();
        });
        it('RandomCHar state "char" is empty object', () => {
            expect(char.state().char).toBeObject();
        });
        it('RandomCHar state "loading" is true', () => {
            expect(char.state().loading).toBeTruthy();
        });
        it('RandomCHar state "error" is false', () => {
            expect(char.state().error).toBeFalsy();
        });
    });
    describe('Handlers tests', () => {
        it('testing onCharLoaded', () => {
            char.instance().onCharLoaded();
            expect(char.state().loading).toBeFalsy();
        });
        it('testing onError', () => {
            char.instance().onError();
            expect(char.state().loading).toBeFalsy();
            expect(char.state().error).toBeTruthy();
        });
        it('testing updateChar', () => {
            char.instance().updateChar();
            expect(char.state().loading).toBeFalsy();
        });
    })
});