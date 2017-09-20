const path = require("path");
const { expect } = require("chai");
const sinon = require("sinon");

let _ = require(path.join(__dirname, "../lib/memoize"));

describe("#memoize",() => {
  it("is a function", () => {
    expect(_.memoize).to.be.a("function");
  });

  it("should accept at least one argument", () => {
    expect(_.memoize.length).to.be.at.least(1);
  });

  it("returns a function", () => {
    let result = _.memoize(() => {});
    expect(result).to.be.a("function");
    result = _.memoize(123456);
    expect(result).to.be.a("function");
  });

  it("only runs the function when necessary", function() {
    const spy = sinon.stub();
    spy.returns(1);
    const rememberSpy = _.memoize(spy);
    rememberSpy(1);
    expect(spy.callCount).to.equal(1);
    rememberSpy(1);
    expect(spy.callCount).to.equal(1);
    rememberSpy(2);
    expect(spy.callCount).to.equal(2);
  });
});
