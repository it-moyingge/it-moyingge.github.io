document.getElementById("myForm").addEventListener("submit", function(event) {
	event.preventDefault(); // 阻止默认的表单提交行为

	var form = event.target;
	var formData = new FormData(form);

	fetch("https://api.github.com/repos/it-moyingge/it-moyingge.github.io/contents/moyinggeInfo.json", {
			method: "PUT",
			headers: {
				"Authorization": "Bearer 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",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				message: "提交表单数据",
				content: btoa(JSON.stringify(Object.fromEntries(formData))),
			})
		})
		.then(response => response.json())
		.then(data => {
			console.log("表单提交成功");
			// 可以在这里进行其他操作，例如显示成功消息等
		})
		.catch(error => {
			console.error("表单提交失败", error);
			// 可以在这里进行错误处理，例如显示错误消息等
		});
});
