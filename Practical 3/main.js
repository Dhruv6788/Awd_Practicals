$(document).ready(function () {
    // Fetch and display student details from XML file
    $.ajax({
        type: "GET",
        url: "students.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('student').each(function () {
                var enrollment = $(this).find('enrollment').text();
                var name = $(this).find('name').text();

                var row = '<tr>';
                row += '<td><a href="#" class="enrollment-link" data-enrollment="'
                 + enrollment + '">' + enrollment + '</a></td>';
                row += '<td>' + name + '</td>';
                row += '</tr>';
                $('#studentTableBody').append(row);
            });

            $('.enrollment-link').click(function (e) {
                e.preventDefault();
                var Enrollment = $(this).data('enrollment');
                var Student = $(xml).find('student:has(enrollment:contains(' + Enrollment + '))');
                var City = Student.find('details > city').text();
                var Address = Student.find('details > address').text();
                var Pincode = Student.find('details > pincode').text();

                $('#city').text('City: ' + City);
                $('#address').text('Address: ' + Address);
                $('#pincode').text('Pincode: ' + Pincode);
            });
        },
        error: function (xhr, status, error) {
            console.error("Error loading XML file: " + error);
        }
    });
});