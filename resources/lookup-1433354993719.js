(function(window, undefined) {
  var dictionary = {
    "6dfdac76-8f89-4a78-886c-3499ef7c2fcf": "event 2.2",
    "fb27edb6-bf8c-4aea-bea2-f6f5697942a6": "register",
    "806d515a-04ae-40f0-b78a-beb9af33d8fe": "Search Filter",
    "414921c9-bf56-484b-a5d1-a6546483c943": "new chat 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "first screen",
    "e7f8ed0f-ad18-4c76-8958-66738ca4754f": "home2",
    "cf98d899-ae39-4cc5-8b5e-a3d275ae0796": "map hidden",
    "7be15366-c4d5-4c5d-8d3b-f4a99ee9efb2": "new chat1",
    "3b76c03a-f66d-463f-b927-e8b310e57014": "event4",
    "db2caa16-e535-4a28-826c-20e35bbdc81c": "event3",
    "7a0bb03d-0854-4a91-9c52-d20fffca9972": "Search",
    "7985ce24-957b-491c-923a-7adcb5fa9d90": "login",
    "0a4bc081-fa85-4ce7-a3da-1e22a7cea14e": "Add Thor",
    "96a03ef7-ba14-4815-a878-8bf1e6caf708": "new message",
    "415326d9-7a19-4208-93f0-572cc771f12e": "chat2",
    "aad76779-0772-495c-8208-6ed29c30d443": "event 2",
    "6de54ff4-41f2-40b7-84ca-d53f6a6c3e3e": "chat 3",
    "a1dbe9e0-b7cf-4993-b251-ca2d8c2c00c1": "event 1",
    "55bc960a-19ad-40d4-8bfd-fc27969fcb73": "add new contact 2",
    "ad4449ed-0cdf-481c-ae55-215ff2f62010": "chat 1",
    "9d5c99f6-5e80-4e0e-8e3f-52f1b4ebafea": "clicked new message",
    "de11dc73-c55d-471b-81cf-56502c7c8005": "schedule",
    "5f262bd2-b4ed-4e83-af83-9e79d39bd45a": "home",
    "8d69a637-3dd9-4893-8d60-4152f38de852": "add new contact",
    "a908cb25-a12b-42e6-a238-5072cdc6025f": "new conversation",
    "bd16da22-9ad1-4bff-9765-5d58e60ca9b1": "map",
    "a77b7807-aada-49b5-b7bf-71768fbab3f7": "conversation",
    "04ced8b2-d8da-46f4-9c79-3251209e090c": "questions",
    "2e5a0c28-33a5-4454-945d-9b07c242be0e": "event1.2",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);