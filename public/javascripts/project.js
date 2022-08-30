$(document).ready(function () {
  const url = "http://localhost:3000";

  $.getJSON(`${url}/product/fetch_all_categories`, function (data) {
    // alert(JSON.stringify(data));
    data.result.map((item) => {
      $("#categoryid").append(
        $("<option>").text(item.categoryname).val(item.categoryid)
      );
    });

    $("#categoryid").formSelect();
  });
});
