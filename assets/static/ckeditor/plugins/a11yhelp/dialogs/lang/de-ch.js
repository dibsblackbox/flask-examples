<get-system-time-response>
  <response>Response body</response>
</get-system-time-response>


GET /sysinfo/systemtime HTTP/1.1
Host: 10.1.1.222
Authorization: Basic YWRtaW46cGFzc3dvcmQ=
Content-Type: application/vnd.vmware.vcloud.vcloud+xml
X-VMWARE-VCLOUD-EXTENSIONS: 2.0
VCloud-Request-Id: 51d9e8d8-d890-49f2-b160-c4d99d5f9b16


HTTP/1.1 200 OK
Content-Type: application/vnd.vmware.vcloud.vcloud+xml
X-VMWARE-VCLOUD-EXTENSIONS: 2.0
VCloud-Request-Id: 51d9e8d8-d890-49f2-b160-c4d99d5f9b16
Content-Length: 357

<get-system-time-response xmlns="http://www.vmware.com/vcloud/v1.5"
  xmlns:ovf="http://schemas.dmtf.org/ovf/envelope/1"
  xmlns:rasd="http://schemas.dmt
