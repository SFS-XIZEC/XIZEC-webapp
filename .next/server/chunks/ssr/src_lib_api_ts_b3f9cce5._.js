module.exports = [
"[project]/src/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchData",
    ()=>fetchData,
    "postData",
    ()=>postData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
async function fetchData(url, authToken) {
    const headers = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
        }
    };
    try {
        const response = await fetch(url, authToken ? headers : {});
        const data = await response.json();
        if (!response.ok) throw new Error("Failed to fetch data");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenAttributes"])(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
async function postData(url, body, authToken) {
    console.log(url, body);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...authToken && {
                Authorization: `Bearer ${authToken}`
            }
        },
        body: JSON.stringify(body)
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (!response.ok) throw new Error(data?.error?.message || "Failed to post data");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenAttributes"])(data);
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
}
}),
];

//# sourceMappingURL=src_lib_api_ts_b3f9cce5._.js.map