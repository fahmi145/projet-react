import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip
  } from "reactstrap";
  const Tablees = () => {
    return (
      <>
       <div class="card">
  <div class="table-responsive">
    <table class="table align-items-center mb-0">
      <thead>
        <tr>
          <th class=" font-weight-bolder opacity-7">nom apprenant</th>
          <th class=" font-weight-bolder opacity-7 ps-2">formations</th>
          <th class=" font-weight-bolder opacity-7">Etat</th>
          <th class=" font-weight-bolder opacity-7">debut formations</th>
          <th class="text-secondary opacity-7"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg" class="avatar avatar-sm me-3">
                </img>
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-xs">John Michael</h6>
                <p class="text-xs  mb-0">john@EducationalDev.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class=" font-weight-bold mb-0">Formation Compléte Python 2023_ de 0 à Expert</p>
           
          </td>
          <td class="align-middle text-center text-sm">
            <span class="badge badge-sm badge-success">Online</span>
          </td>
          <td class="align-middle text-center">
            <span class=" font-weight-bold">23/04/18</span>
          </td>
          <td class="align-middle">
            <a href="javascript:;" class="font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-3.jpg" class="avatar avatar-sm me-3">
                </img>
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-xs">Alexa Liras</h6>
                <p class="text-xs mb-0">alexa@EducationalDev.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class=" font-weight-bold mb-0">Mobile App Development</p>
            
          </td>
          <td class="align-middle text-center text-sm">
            <span class="badge badge-sm badge-secondary">Offline</span>
          </td>
          <td class="align-middle text-center">
            <span class=" font-weight-bold">11/01/19</span>
          </td>
          <td class="align-middle">
            <a href="#!" class=" font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-4.jpg" class="avatar avatar-sm me-3">
                </img>
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-xs">Laurent Perrier</h6>
                <p class="text-xs mb-0">laurent@EducationalDev.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class=" font-weight-bold mb-0">Data Science Fundamentals</p>
           
          </td>
          <td class="align-middle text-center text-sm">
            <span class="badge badge-sm badge-success">Online</span>
          </td>
          <td class="align-middle text-center">
            <span class="font-weight-bold">19/09/17</span>
          </td>
          <td class="align-middle">
            <a href="#!" class="font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-3.jpg" class="avatar avatar-sm me-3">
                </img>
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-xs">Michael Levi</h6>
                <p class="text-xs mb-0">michael@EducationalDev.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class="font-weight-bold mb-0">JavaScript:la formation ULTIME</p>
       
          </td>
          <td class="align-middle text-center text-sm">
            <span class="badge badge-sm badge-success">Online</span>
          </td>
          <td class="align-middle text-center">
            <span class=" font-weight-bold">24/12/08</span>
          </td>
          <td class="align-middle">
            <a href="#!" class=" font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg" class="avatar avatar-sm me-3">
                </img>
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-xs">Richard Gran</h6>
                <p class="text-xs mb-0">richard@EducationalDev.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class="font-weight-bold mb-0">Migration de bases de données vers AWS</p>
           
          </td>
          <td class="align-middle text-center text-sm">
            <span class="badge badge-sm badge-secondary">Offline</span>
          </td>
          <td class="align-middle text-center">
            <span class=" font-weight-bold">04/10/21</span>
          </td>
          <td class="align-middle">
            <a href="#!" class="font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-4.jpg" class="avatar avatar-sm me-3">
                </img>
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-xs">Miriam Eric</h6>
                <p class="text-xs mb-0">Miriam@EducationalDev.com</p>
              </div>
            </div>
          </td>
          <td>
            <p class=" font-weight-bold mb-0">Certification Cybersécurité : De Débutant à Expert 2023</p>
           
          </td>
          <td class="align-middle text-center text-sm">
            <span class="badge badge-sm badge-success">OnLine</span>
          </td>
          <td class="align-middle text-center">
            <span class=" font-weight-bold">14/09/20</span>
          </td>
          <td class="align-middle">
            <a href="#!" class="font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>



















































































       </>
  );
};

export default Tablees;