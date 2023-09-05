import { Select } from "antd";
import React, { useState } from "react";

function AdSettingForm() {
  const [isAddEnabled, setIsAdEnabled] = useState(true);

  const [adNetwork, setAdNetwork] = useState("AdMob");

  const handleChange = (value) => {
    setAdNetwork(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-xl text-blackHigh font-bold">Ads</h4>
        </div>
        <div className="inline-flex items-center gap-4">
          <span className="text-xl text-blackHigh font-bold">Ad Enable</span>
          <input
            type="checkbox"
            className="toggle toggle-error"
            checked={isAddEnabled}
            onChange={(e) => setIsAdEnabled(e.target.checked)}
          />
          {/* <Switch
            defaultChecked
            onChange={onChange}
            className="bg-primaryColor"
          /> */}
        </div>
      </div>
      <div className="mt-6">
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-y-4 gap-x-12">
            {/* primaryNetwork  */}
            <div className="flex flex-col gap-1">
              <span className="text-blackHigh">Primary Ad Network:</span>
              <div className="w-full">
                <Select
                  className="w-full border border-slateLow rounded-lg outline-none adSetting"
                  defaultValue={adNetwork}
                  onChange={handleChange}
                  aria-required
                  disabled={isAddEnabled ? false : true}
                >
                  <Select.Option value="AdMob">AdMob</Select.Option>
                  <Select.Option value="AppLovin">AppLovin</Select.Option>
                </Select>
              </div>
            </div>
            {/* AdMob Application ID: */}
            <div className="flex flex-col gap-1">
              <span className="text-blackHigh">
                {adNetwork === "AdMob" ? "AdMob" : "AppLovin"} Application ID:
              </span>
              <input
                type="text"
                placeholder=""
                required
                name="ApplicationId"
                className={`w-full border border-slateLow ${
                  isAddEnabled ? "bg-transparent" : "bg-black-04 text-black-25"
                } rounded-lg outline-none p-4`}
                readOnly={isAddEnabled ? false : true}
              />
            </div>
            {/* AdMob App ID: */}
            <div className="flex flex-col gap-1">
              <span className="text-blackHigh">
                {adNetwork === "AdMob" ? "AdMob" : "AppLovin"} App ID:
              </span>
              <input
                type="text"
                placeholder=""
                required
                name="appId"
                className={`w-full border border-slateLow ${
                  isAddEnabled ? "bg-transparent" : "bg-black-04 text-black-25"
                } rounded-lg outline-none p-4`}
                readOnly={isAddEnabled ? false : true}
              />
            </div>
            {/* AdMob Banner Ad Unit ID: */}
            <div className="flex flex-col gap-1">
              <span className="text-blackHigh">
                {adNetwork === "AdMob" ? "AdMob" : "AppLovin"} Banner Ad Unit
                ID:
              </span>
              <input
                type="text"
                placeholder=""
                required
                name="bannerUnitId"
                className={`w-full border border-slateLow ${
                  isAddEnabled ? "bg-transparent" : "bg-black-04 text-black-25"
                } rounded-lg outline-none p-4`}
                readOnly={isAddEnabled ? false : true}
              />
            </div>
            {/* AdMob Interstitial Ad Unit ID: */}
            <div className="flex flex-col gap-1">
              <span className="text-blackHigh">
                {adNetwork === "AdMob" ? "AdMob" : "AppLovin"} Interstitial Ad
                Unit ID:
              </span>
              <input
                type="text"
                placeholder=""
                required
                name="interstitialUnitId"
                className={`w-full border border-slateLow ${
                  isAddEnabled ? "bg-transparent" : "bg-black-04 text-black-25"
                } rounded-lg outline-none p-4`}
                readOnly={isAddEnabled ? false : true}
              />
            </div>

            {/* AdMob Native Ad Unit ID: */}
            <div className="flex flex-col gap-1">
              <span className="text-blackHigh">
                {adNetwork === "AdMob" ? "AdMob" : "AppLovin"} Native Ad Unit
                ID:
              </span>
              <input
                type="text"
                placeholder=""
                required
                name="ntiveUnitId"
                className={`w-full border border-slateLow ${
                  isAddEnabled ? "bg-transparent" : "bg-black-04 text-black-25"
                } rounded-lg outline-none p-4`}
                readOnly={isAddEnabled ? false : true}
              />
            </div>
            {/* AdMob Rewarded Ad Unit ID: */}
            <div className="flex flex-col gap-1">
              <span className="text-blackHigh">
                {adNetwork === "AdMob" ? "AdMob" : "AppLovin"} Rewarded Ad Unit
                ID:
              </span>
              <input
                type="text"
                placeholder=""
                required
                name="rewardedUnitId"
                className={`w-full border border-slateLow ${
                  isAddEnabled ? "bg-transparent" : "bg-black-04 text-black-25"
                } rounded-lg outline-none p-4`}
                readOnly={isAddEnabled ? false : true}
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              disabled={isAddEnabled ? false : true}
              className={`btn w-52 h-14 bg-primaryColor text-white hover:bg-primaryColor hover:text-white capitalize`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdSettingForm;
